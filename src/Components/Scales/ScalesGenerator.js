import React, { useEffect, useState} from 'react'
import styles from './ScalesGenerator.module.css'
import useViewport from '../Helpers/CustomHooks'
import PropTypes from 'prop-types';
import * as Md from "react-icons/md";
import {isMobileOnly, isBrowser, isTablet} from 'react-device-detect';
import {ReactComponent as ScaleButtonOpaque} from './imgs/scaleButtonOpaque.svg'
import {ReactComponent as Fret} from './imgs/fretBoard.svg'
import { getNoteBasedOnInterval, getNoteFromFretNumber } from '../Helpers/HelperFunction';

// Produce a fret board of 18 frets
// Also generate a scale based on the CAGED system
export default function ScalesGenerator(props){
    const stringNotes = ['E', 'A', 'D', 'G', 'B', 'E']
    const notesFromInterval = (props.intervals && props.note) && props.intervals.map(i => getNoteBasedOnInterval(props.note, i))
    const [showAll, setShowAll] = useState(false)

    function ScalesButton(props){
        var topPos = 20 * props.string - 28
        var leftPos = -1 + 5.5 * props.fret
    
        var scaleButtonContainer = {
            position: 'absolute',       
            top: `${topPos}%`,
            left: `${leftPos}%`,
    
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '3%',
            height: '15%'
        }

        ScalesButton.propTypes = {
            onClick: PropTypes.func,
            fret: PropTypes.number,
            string: PropTypes.number,
            isRoot: PropTypes.bool
        }
        
        return(
            <div style={scaleButtonContainer}>
                <button className={styles.scaleButton} onClick={props.onClick}>
                    <ScaleButtonOpaque className={props.isRoot ? styles.scaleButtonOutlineImg : styles.scaleButtonImg}/>
                </button>
                
                <p className={props.isRoot ? styles.scaleButtonRootText : styles.scaleButtonText} style={{fontSize: `${isMobileOnly ? '50%' : '1vw'}`}}>{
                    // eslint-disable-next-line react/prop-types
                    props && props.children
                }</p>
            </div>
        )
    }

    var imgContainer = {
        position: 'relative',
        maxHeight: '100%',
        flexGrow: '1',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: `${isMobileOnly ? '0%' : '20%'}`,
        marginLeft: `${isMobileOnly ? '5%' : '0%'}`
    }
    var buttonContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    
        whiteSpace: 'nowrap',
        width:  `${!isBrowser ? '35%' : '15%'}`,
        height: '100%',
    
        margin: `${isMobileOnly ? '0%' : '2%'}`
    }

    // Props validation
    ScalesGenerator.propTypes = {
        intervals: PropTypes.array,
        note: PropTypes.string
    }
    
    // Create a Scale
    var buttons = []
    for(var i = 1; i < 7; i++){
        for(var j = 0; j < 18; j++){
            var fretNote = getNoteFromFretNumber(i,j)
            if(notesFromInterval && notesFromInterval.includes(fretNote))
                buttons.push(<ScalesButton key={`${i} ${j}`} isRoot={fretNote.includes(props.note)} fret={j} string={i}>{props.intervals[notesFromInterval.indexOf(fretNote)]}</ScalesButton>)
        }
    }

    return(
        <div className={styles.Container}>
            <div style={buttonContainer}>
                <button className={showAll ? styles.showAllButtonActive : styles.showAllButton} onClick={() => setShowAll(!showAll)}><h3>Show All</h3></button>
                <button className={styles.emptyShellButton}><Md.MdNavigateBefore className={styles.nextImg}/></button>
                <button className={styles.emptyShellButton}><Md.MdNavigateNext className={styles.nextImg}/></button>
            </div>
            <div style={imgContainer}>  
                <Fret className={styles.Img}/>
                {stringNotes.map((note, index) => {
                    // just some equation to position the note letters
                    var noteTopPos = 50 - 20.5 * index 
                    
                    var stringName ={
                        position: 'absolute',
                        top: `${noteTopPos}%`,
                        left: '-35px',

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
                {buttons}
            </div>
        </div>
    )
}