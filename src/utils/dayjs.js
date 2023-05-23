import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
// dayjs.tz.setDefault('Asia/Jakarta');
dayjs.tz.setDefault('America/New_York');


const dayJs = dayjs;
export default dayJs;
