import React, { useState, useEffect, useMemo } from 'react';
import { Snackbar } from 'react-native-paper';

const SnackbarComponent = ({ visible, message, onDismiss }) => {
  console.log('SnackbarComponent visible: ', visible);
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={Snackbar.DURATION_SHORT}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
      }}
      action={{
        label: 'OK',
        onPress: onDismiss
      }}
    >
      {message}
    </Snackbar>
  );
};
let showSnackbar;
let SnackbarComponentMemo;
const useSnackbar = () => {
  console.log('useSnackbar');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessageQueue, setSnackbarMessageQueue] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const displaySnackbar = (message) => {
    console.log('displaySnackbar');
    setSnackbarMessageQueue(queue => [...queue, message]);
    if (!snackbarVisible) {
      setSnackbarVisible(true);
    }
  };

  const handleSnackbarDismiss = () => {
    setSnackbarMessageQueue(queue => queue.slice(1));
    if (snackbarMessageQueue.length > 1) {
      setSnackbarMessage(snackbarMessageQueue[1]);
    } else {
      setSnackbarVisible(false);
    }
  };

  useEffect(() => {
    if (snackbarMessageQueue.length > 0) {
      setSnackbarMessage(snackbarMessageQueue[0]);
      setSnackbarVisible(true);
    }
  }, [snackbarMessageQueue]);


  showSnackbar = React.useCallback(displaySnackbar, [snackbarMessageQueue, snackbarMessage]);
  // showSnackbar = displaySnackbar;
  SnackbarComponentMemo = React.useMemo(() => (
    <SnackbarComponent
      visible={snackbarVisible}
      message={snackbarMessage}
      onDismiss={handleSnackbarDismiss}
    />
  ), [snackbarVisible, snackbarMessage, snackbarMessageQueue ]);

  const memoizedSnackbarComponent = useMemo(
    () => (
      <SnackbarComponent
        visible={snackbarVisible}
        message={snackbarMessage}
        onDismiss={handleSnackbarDismiss}
      />
    ),
    [snackbarVisible, snackbarMessage]
  );
  return {
    showSnackbar: displaySnackbar,
    SnackbarComponent: memoizedSnackbarComponent

  };
};
export {showSnackbar, useSnackbar, SnackbarComponentMemo};

