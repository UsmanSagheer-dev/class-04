import React from 'react'
import './PartnerCard.css'
import { height } from '@fortawesome/free-solid-svg-icons/fa0'

export default function PartnerCard({img,width,height}) {
    const styles = {
        width: width ,
        height: height ,
    };
  return (
        <>
      
        <div className="partner_card">
           
            <div className="partner_img">
                <img src={img} alt="" style={styles} />
            </div>
        </div>
        </>
  )
}