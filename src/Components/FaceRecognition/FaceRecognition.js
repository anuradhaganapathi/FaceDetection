/**
 * Created by aga on 18.01.2019.
 */

import React from 'react'

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img alt="" src= {imageUrl} width='500px' height="auto"/>
            </div>
        </div>
    );
}

export default FaceRecognition;