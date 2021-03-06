import React from 'react'
import Tile from '.'
import image from './stories/image'
import topic from './stories/topic'
import title from './stories/title'
import buttonLabel from './stories/buttonLabel'
import reference from './stories/reference'

export default {
    title: 'Tile',
}

export const tile = () => {
    return (
        <div>
            <Tile
                image={image}
                topic={topic}
                title={title}
                verticalPosition={'bottom'}
                horizontalPosition={'left'}
                buttonLabel={buttonLabel}
                reference={reference}
                isClickable={false}
            />
        </div>
    )
}

tile.story = { name: 'Tile' }
