import React, {useState} from 'react';
import {Button, Icon} from 'semantic-ui-react';

import { addLike } from '../../services/articleService.js';

import 'semantic-ui-css/semantic.min.css';

export default function Like(props) {

    const [colorbtn, setColorbtn] = useState('white');

    const click = () => {
        if(colorbtn === 'red'){
            // !!backend:hier ebenso logic anwenden
            addLike(props.id)
            setColorbtn('white');
        }else{
            // !!backend:hier logic indem db zähler aktiviert wir   mit post anfrage
            setColorbtn('red');
        }
    }

    return(
        <div>
            <Button color = {colorbtn} onClick = { () => click()}>
                <Icon name='heart' />
            </Button>
        </div>
);
}