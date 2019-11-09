import history from "./history";
// import { useParams} from 'react-router-dom';

export default function navTo(loc) {
    history.push(loc);
}

export function currentPath() {
    console.log('currentPath', history.location)
    return history.location.path;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // let { id } = useParams();
    // console.log(id);
    // return id.slice(1);
}

export function goBack() {
    history.goBack();
}

