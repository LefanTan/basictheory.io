import React, { useEffect, useState} from 'react'
import styles from './ScalesGenerator.module.css'
import useViewport from '../Helpers/CustomHooks'
import PropTypes from 'prop-types';
import {ReactComponent as scaleButtonOpaque} from './imgs/scaleButtonOpaque.svg'
import {ReactComponent as scaleButtonOutline} from './imgs/scaleButtonOutline.svg'
import {ReactComponent as Fret} from './imgs/fretBoard.svg'

// Produce a fret board of 18 frets
export default function ScalesGenerator(props){

    const stringNotes = ['E', 'A', 'D', 'G', 'B', 'E']
    const [imgContainerWidth, setImgContainerWidth] = useState(60)

    // get the current width of the device view port
    const {width, height} = useViewport()

    // Update ImgContainerWidth depending on device type
    useEffect(() => {
        // If less than 1000, it is on a device and so change the width accordingly 
        if(width < height) 
            setImgContainerWidth(90)
        else 
            setImgContainerWidth(60)
    }, [width])

    useEffect(() => {
        console.log(props.notes)
    }, [props])

    var imgContainer = {
        position: 'relative',
        width: `${imgContainerWidth}%`,
        maxHeight: '100%',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    // Props validation
    ScalesGenerator.propTypes = {
        notes: PropTypes.array
    }

    return(
        <div className={styles.Container}>
            <div style={imgContainer}>
                <Fret className={styles.Img}/>
                {stringNotes.map((note, index) => {
                    // just some equation to position the note letters
                    var noteTopPos = 50 - 20.5 * index 
                    
                    var stringName ={
                        position: 'absolute',
                        top: `${noteTopPos}%`,
                        left: '-25px',

                        width: 'fit-content',
                        height: '100%',
                    
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                    return(
                        <div key={index} style={stringName}>
                            <h3 className={styles.h3}>{note}</h3>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}