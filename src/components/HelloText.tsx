import React, {FunctionComponent, useEffect, useState} from 'react'
import {Text} from 'react-native'

export const HelloText: FunctionComponent<{ color: string, text: string }> = props => {
    const [color, setColor] = useState(props.color)

    useEffect(() => {
        setColor(props.color)
    })

    return (
        <Text style={{color}}>
            {props.text}
        </Text>
    )
}
