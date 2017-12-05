import React, { Component } from 'react';
import { connect } from 'react-redux';



class Students extends Component{
	render(){
		var studentArray = this.props.students.map((student,index)=>{
			return(<li key={index}>{student.name} sits in seat {student.seat} in the {student.row} row!!</li>)
		});
		console.log(this.props)
		return(
			<div>
				<h1>Students Component</h1>
				{studentArray}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		
		students: state.students
		
	}
}

// export default Students;

export default connect(mapStateToProps)(Students);