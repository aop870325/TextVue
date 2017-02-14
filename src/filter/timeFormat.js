/**
 * Created by dowen on 2017/2/9.
 */
export const timeFormat = (time) =>{
    if( time ){
        let oDate = new Date();
        oDate.setTime(time);
        let y = oDate.getFullYear();
        let m = oDate.getMonth()+1;
        let d = oDate.getDate();
        let h = oDate.getHours();
        let MM = oDate.getMinutes();
        let s = oDate.getSeconds();
        return y + '-' + m + '-' + d +" "+ h + ":" + MM + ":" + s;
    }
}