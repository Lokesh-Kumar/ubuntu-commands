import React,{Component} from 'react';
import './Card.css';
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Card extends Component{


    renderCardContent = (props) =>{
        const comp =[];
        if(props.content){
            var content = props.content;
        
        var d_s = 0;
        var c_s = 0;
        for(var i =0;i<content.length;i++){
            if( content.charAt(i)==='<' && content.charAt(i+1)==='-'){
                comp.push(<div className="content-description">{content.substring(d_s,i)}</div>);
                c_s = i+2;
            }
            if( content.charAt(i)==='-' && content.charAt(i+1)==='>' && c_s !== 0){
                comp.push(<div className="content-code"> <FontAwesomeIcon icon={faCopy} /><pre>{content.substring(c_s,i)}</pre></div>);
                c_s=0;
                d_s=i+2
            }
       }
       if(d_s <= content.length){
         comp.push(<div className="content-description">{content.substring(d_s,content.length)}</div>);
       }
    }
        return (
            <div className="card-content">
                {comp}
            </div>
        )
    
    };
    render(){
        return (
            <div className="card">
                <div className="card-title">
                    {this.props.title}
                </div>
                    {this.renderCardContent(this.props)}  
                 </div>
            )
    };
}

export default Card;
