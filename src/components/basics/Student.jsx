import React from "react";
import PropTypes from 'prop-types';

function Student({sname,age,images}) {
  
    console.log(sname,age,images);

  return (
    <div style={{border:"2px groove purple",width:200,height:300,padding:"10px",textAlign:"center",margin:"20px"}}>
        <h3>{sname}</h3>
        <img style={{width:"100%",height:200}} src={images.imgurl} alt="" />
        <h4>{age}</h4>
    </div>
  );
}

Student.defaultProps=
{
    sname:"No Name",
    age:"No Age",
    images:
    {
        imgurl:"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
    }
}

Student.propTypes=
{
    sname:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    images:PropTypes.object.isRequired
}

export default Student;
