import React from 'react'
import {Button, Container} from 'react-bootstrap'
import * as BsIcons from 'react-icons/bs' 
const Cards = () => {
    return (
        <div style={{margin:'6.5rem'}}>
        <Container style={{margin:'2rem'}}>
        <div className="card-deck"  style={{padding:'2rem'}}>
        
     <div className="card border-dark mb-3" style={{maxWidth: "18rem",marginLeft:'2rem'}}>
     
  <div className="card-header">Asset Balance <BsIcons.BsThreeDots style={{float:'right'}}/></div>
  
  <div className="card-body">
    <h6 className="card-title">Enter Amount</h6>
   <Button disabled>Rs.1,25,000</Button>
    <p className="card-text"><small class="text-muted">Last updated 3 Dec</small></p>
  </div>
</div>
    <div className="card border-dark mb-3" style={{maxWidth: "18rem"}}>
  <div className="card-header">Growth Rate  <BsIcons.BsThreeDots style={{float:'right'}}/></div>
  <div className="card-body">
    <h6 className="card-title">Enter Growth Rate</h6>
    <Button className="btn btn-outline-primary" disabled>6.3%</Button>
    <p className="card-text"><small className="text-muted">Inflation 6%</small></p>
  </div>
</div>
    <div className="card border-dark mb-3" style={{maxWidth: "100%"}}>
  <div className="card-header">Major Investments  <BsIcons.BsThreeDots style={{float:'right'}}/></div>
  <div className="card-body">
    <h6 className="card-title">Returns Generated per Month</h6>
    <p style={{color:'blue'}}>Rs. 1,25,000</p>
  </div>
</div>
</div>
</Container>
<Container style={{margin:'2rem'}}>
<div className="card-deck"  style={{padding:'2rem'}}>
        
        <div className="card border-dark mb-3" style={{maxWidth: "18rem",marginLeft:'2rem'}}>
     <div className="card-header">Financial Independence  <BsIcons.BsThreeDots style={{float:'right'}}/></div>
     <div className="card-body">
       <h6 className="card-title">Age</h6>
      <h5>45 Years</h5>
       <p className="card-text"><small>Optimized</small></p>
     </div>
   </div>
       <div className="card border-dark mb-3" style={{maxWidth: "18rem"}}>
     <div className="card-header">Average Expenses  <BsIcons.BsThreeDots style={{float:'right'}}/></div>
     <div className="card-body">
       <h6 className="card-title">Amount</h6>
       <h5>Rs. 25,000</h5>
       <p className="card-text"><small>3 months average</small></p>
     </div>
   </div>
   </div>
</Container>
        </div>
    )
}

export default Cards
