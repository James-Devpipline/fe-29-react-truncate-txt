export default function Truncate(props) {
  if (props.myStr.length > props.num) {
    if(props.etc){
      return props.myStr.slice(0, props.num) + props.etc
    } else {
      return props.myStr.slice(0, props.num) + '...'
    }
  } else {
    return props.myStr
  }
}