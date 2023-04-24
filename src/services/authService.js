import auth, {firebase} from '@react-native-firebase/auth';
import React from 'react';
import { View , Text} from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
import useSnackbar from '../redux/features/snackbar/useSnackbar';


export const Logout = async () => {

    try {
        if (firebase.auth().currentUser) {
            await auth().signOut()

            // GoogleSignin.configure({
            //     webClientId: '1020420479230-4n1b09us55qb5i0djs71s3f5gf66tnfv.apps.googleusercontent.com',
            // });
            // return await GoogleSignin.signOut();
          } else {
            console.log("No user currently signed in.");
          }

    } catch (error) {
        console.error(error);
    }
    };


export const onSignin = async (email, password, setEmailError, setPasswordError) => {
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      if (res?.user?.emailVerified === false) {
        return 'unverified';
      }
      return true;
    } catch (error) {
      console.log('error onSignin', error);
        handleError(error.code, setEmailError,setPasswordError )
      return false;
    }
  };
  

export const onRegister = async (email, password) => {
    // handleApi('onRegister', 'API_RESET', null)
    // handleApi('onRegister', 'API_LOADING', {path: 'onRegister'})
    return await auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('user in aut onregister', user);
            sendVerifyEmail();
            // handleApi('onRegister', 'API_SUCCESS', null)
            return true;
        })
        .catch(error => {
            // handleApi('onRegister', 'API_ERROR', {errorMessage: error.message, errorCode: error.code})
            console.log('error in register', error);
            console.error(error);
            return false;
        });

};

// get user data from firebase auth to check if email is verified
export const getUser = async (setData) => {
    auth().onUserChanged(user => {
        if (user) {
            setData(user);
        return user;
        } else {
        return null;
        }
    });
};

export async function getUserData() {
    const user = firebase.auth().currentUser;
    if (user) {
    //   const {email, displayName, photoURL } = user;
      return user;
    } else {
      return null;
    }
  }


// verify email after register createUserWithEmailAndPassword
export const sendVerifyEmail = async () => {
    await auth().currentUser.sendEmailVerification()
        .catch(error => {
            console.log('error in send verif email', error);
            console.error(error);
        });
};


export const onGoogleLogin = async () => {
    return new Promise((resolve, reject) => {
        // handleApi('onGoogleLogin', 'API_RESET', null)
        // handleApi('onGoogleLogin', 'API_LOADING', {path: 'onGoogleLogin'})
        GoogleSignin.configure({
            webClientId: '1020420479230-4n1b09us55qb5i0djs71s3f5gf66tnfv.apps.googleusercontent.com',
        });
        GoogleSignin.hasPlayServices()
            .then(() => {
                GoogleSignin.signIn()
                    .then((data) => {
                        const { idToken } = data;
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                        auth().signInWithCredential(googleCredential)
                            .then((res) => {
                                // handleApi('onGoogleLogin', 'API_SUCCESS', null)
                                resolve(res);
                            })
                            .catch((error) => {
                                // reject(error);
                                console.log('error', error)
                                // handleApi('onGoogleLogin', 'API_ERROR', {errorMessage: error.message, errorCode: error.code})
                            });
                    })
                    .catch((error) => {
                        // reject(error);
                        console.log('error', error)
                        // handleApi('onGoogleLogin', 'API_ERROR', {errorMessage: error.message, errorCode: error.code})
                    });
            }
            )
            .catch((error) => {
                // reject(error);
                console.log('error', error)
                // handleApi('onGoogleLogin', 'API_ERROR', {errorMessage: error.message, errorCode: error.code})
            }
            );
    }
    );
};


// export const onAppleLogin = async () => {
    // handleApi('API_RESET', null)
    // handleApi('API_LOADING', {path: 'onAppleLogin'})
//   return new Promise((resolve, reject) => {
//     appleAuth.performRequest({
//       requestedOperation: appleAuth.Operation.LOGIN,
//       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//     })
//       .then((appleAuthRequestResponse) => {
//         const { identityToken, nonce } = appleAuthRequestResponse;
//         if (identityToken) {
//           const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);
//           const userCredential = firebase.auth().signInWithCredential(appleCredential);
        //   handleApi('onAppleLogin', 'API_SUCCESS', null)
//           resolve(userCredential);
//         } else {
//           reject('Something went wrong, try again later');
//         }
//       })
//       .catch((error) => {
//         //   reject(error);
        //   handleApi('onAppleLogin', 'API_ERROR', {errorMessage: error.message, errorCode: error.code})
//       });
//   }
//     );
// };

export const onAppleLogin = async () => {
    console.log('masul apple login');
    
    // handleApi('API_RESET', null)
    // handleApi('API_LOADING', {path: 'onAppleLogin'})
    
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [
            appleAuth.Scope.FULL_NAME,
            appleAuth.Scope.EMAIL, 
        ],
      });
    
      console.log('appleAuthRequestResponse:', appleAuthRequestResponse);

      const { identityToken, nonce, fullName } = appleAuthRequestResponse;
      if (!identityToken) {
        throw new Error('Something went wrong, try again later');
      }
    
      const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);
      const userCredential = await firebase.auth().signInWithCredential(appleCredential);
    
    //   const { fullName } = appleAuthRequestResponse.realUserStatus;
      console.log('fullName in apple login', fullName);
      if (fullName.givenName && fullName.familyName) {
        console.log('masuk if fullName', fullName, JSON.stringify(fullName));
        const displayName = fullName.givenName + ' ' + fullName.familyName;
        await userCredential.user.updateProfile({ displayName });
      }
    
    //   handleApi('onAppleLogin', 'API_SUCCESS', null)
      return userCredential;
    } catch (error) {
      handleApi('onAppleLogin', 'API_ERROR', { errorMessage: error.message, errorCode: error.code });
    console.log('error apple login', error);
    //   throw error;
    }
  };
  


//function to get uid from firebase
export const getUid = async () => {
    const uid = auth().currentUser.uid;
    return uid;
};



// rewrite onForgotPassword function to return data
export const resetPassword = async (email) => {
    const {showSnackbar} = useSnackbar();
    try {
        return await auth().sendPasswordResetEmail(email);

    } catch (error) {
        console.log('error resetPassword', error);
        showSnackbar('Terjadi kesalahan, silahkan coba lagi');
    }

    
};

export const getNewToken = async () => {
    try {
        await auth().currentUser?.getIdToken(true).then((idToken) => {
        if (idToken) {
            console.log('new token', idToken);
            return idToken;
        }
        return null;
    });
    } catch (error) {
        console.log('error get new token', error);
        
    }

};

export const refreshUser = async () => {
    await firebase.auth().currentUser.reload().then(function() {
        console.log(firebase.auth().currentUser.displayName);
    });
}

export const updateDisplayName = async (displayName) => {
    await auth().currentUser.updateProfile({
        displayName: displayName,
    }).then(() => {
        console.log('update display name success');
        return true;
    }).catch((error) => {
        console.log('error update display name', error);
        return false;
    });
};





export const updatePassword=  async (currentPassword, newPassword) => {
    const user= auth().currentUser;
    const cred = auth.EmailAuthProvider.credential(user.email, currentPassword);
    return await user.reauthenticateWithCredential(cred).then(async () => {
        await user.updatePassword(newPassword);
        return true;
    }).catch((error) => {
        console.log('error reauthenticate', JSON.stringify(error));
        return error;
    });    
};


export const reathenticate = async (currentPassword) => {
    const user = auth().currentUser;
    const cred = firebase.auth.EmailAuthProvider.credential(
        user.email,
        currentPassword
    );
    try {
        await user.reauthenticateWithCredential(cred);
        console.log('Reauthentication successful!');
        return true;
    } catch (error) {
        console.log('Reauthentication failed!', error.code );
        return error.code;
    }
}


// function input code for reset password
export const onConfirmPasswordReset = async (code) => {
    await auth().confirmPasswordReset(code, password)
        .then(() => {
            console.log('Password reset!');
        })
        .catch(error => {
            if (error.code === 'auth/expired-action-code') {
                console.log('The code is expired!');
            }
            if (error.code === 'auth/invalid-action-code') {
                console.log('The code is invalid!');
            }
            if (error.code === 'auth/user-disabled') {
                console.log('The user is disabled!');
            }
            if (error.code === 'auth/user-not-found') {
                console.log('The user is not found!');
            }
            console.error(error);
        });
};

// function change password
// export const changePassword = async (password) => {
//     await auth().currentUser.updatePassword(password)
//         .then(() => {
//             console.log('Password updated!');
//         })
//         .catch(error => {
//             if (error.code === 'auth/weak-password') {
//                 console.log('The password is too weak!');
//             }
//             console.error(error);
//         });
// };

// function change email
export const changeEmail = async (email) => {
    await auth().currentUser.updateEmail(email)
        .then(() => {
            console.log('Email updated!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        });
};

export const  AppleLoginButton=() => {
    return (
      <View>
        {appleAuth.isSupported && (
          <AppleButton
            cornerRadius={10}
            // style={{ width: 160, height: 48 }}
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.SIGN_IN}
            onPress={() => onAppleLogin()}
          >
            </AppleButton>
        )}
      </View>
    );
  }

  export const  GoogleLoginButton=() => {
    return (
      <View >
          <GoogleSigninButton
            // style={{ width: 160, height: 48}}
            style={{ width: 192, height: 58}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => googleLogin().then(() => console.log('Signed in with Google!'))}
            // disabled={isSigninInProgress}
            >
            </GoogleSigninButton>
      </View>
    );
  }

  export const deleteAccount = async (password) => {
};


export const handleError = (error, setEmailError, setPasswordError) => {
    switch (error) {
        case 'auth/email-already-in-use':
            return setEmailError('Alamat email sudah digunakan!');
        case 'auth/invalid-email':
            return setEmailError('Mohon masukkan alamat email yang valid');
        case 'auth/operation-not-allowed':
            return setEmailError('Masuk dengan Email dan Password tidak diaktifkan!');
        case 'auth/weak-password':
            return setPasswordError('Password terlalu lemah!');
        case 'auth/wrong-password':
            return setPasswordError('Password tidak valid!');
        case 'auth/user-not-found':
            return setEmailError('Email tidak terdaftar!');
        case 'auth/invalid-verification-code':
            return 'Kode verifikasi tidak valid!';
        case 'auth/invalid-verification-id':
            return 'ID verifikasi tidak valid!';
        case 'auth/expired-action-code':
            return 'Kode sudah kedaluwarsa!';
        case 'auth/invalid-action-code':
            return 'Kode tidak valid!';
        case 'auth/user-disabled':
            return setEmailError('Pengguna dinonaktifkan!');
        case 'auth/too-many-requests':
            return 'Terlalu banyak permintaan. Coba lagi nanti!';
        case 'auth/account-exists-with-different-credential':
            return 'Akun dengan alamat email yang sama sudah ada dengan kredensial masuk yang berbeda. Masuk menggunakan penyedia yang terkait dengan alamat email ini.';
        case 'auth/auth-domain-config-required':
            return 'Konfigurasi hilang atau tidak lengkap. Metode masuk yang diminta dinonaktifkan untuk proyek Firebase ini. Aktifkan di Firebase console, di bawah tab metode masuk bagian Auth.';
        case 'auth/cancelled-popup-request':
            return 'Operasi ini dibatalkan karena adanya popup konflik yang dibuka.';
        case 'auth/operation-not-supported-in-this-environment':
            return 'Operasi ini tidak didukung di lingkungan dimana aplikasi ini berjalan. "location.protocol" harus http atau https dan web storage harus diaktifkan.';
        case 'auth/popup-blocked':
            return 'Tidak dapat membuat koneksi dengan popup. Mungkin diblokir oleh browser.';
        case 'auth/popup-closed-by-user':
            return 'Popup ditutup oleh pengguna sebelum menyelesaikan operasi.';
        default:
            return 'Terjadi kesalahan server.';

    }
};

export const updateEmail = async (email) => {
    await auth().currentUser.updateEmail(email)
        .then(() => {
            console.log('Email updated!');
        })
        .catch(error => {
            return handleError(error);
        });
}
