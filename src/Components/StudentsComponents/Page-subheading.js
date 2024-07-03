import {Row} from 'react-bootstrap';
export default function Page_subheading(props){
    return(
        <Row>
            <div className="col">
                <h4>{props.pagesubheading}</h4>
            </div>
        </Row>
        
    );
}