import moment from 'moment';

const convertDateToString = (dataString: string): string => {
    const dateTime = moment(dataString, moment.ISO_8601).milliseconds(0);
    const now = moment();

    const diff = now.diff(dateTime);
    const calDuration = moment.duration(diff);
    const years = calDuration.years();
    const months = calDuration.months();
    const days = calDuration.days();
    const hours = calDuration.hours();
    const minutes = calDuration.minutes();
    const seconds = calDuration.seconds();

    if(years === 0 && months === 0 && days === 0 && hours === 0 && minutes === 0 && (seconds === 0 || seconds < 1)) {
        return '0초';
    }
    if(years === 0 && months === 0 && days === 0 && hours === 0 && minutes === 0) {
        return `${Math.floor(seconds)}초`;
    }
    if(years === 0 && months === 0 && days === 0 && hours === 0) {
        return `${Math.floor(minutes)}분`;
    }
    if(years === 0 && months === 0 && days === 0) {
        return `${Math.floor(hours)}시간`;
    }
    if(years === 0 && months === 0) {
        return `${Math.floor(months)}개월`;
    }
    if(years === 0) {
        return `${Math.floor(years)}년`;
    }
    return `${years}년`;
};

export default convertDateToString;