import React, { Component, Fragment } from 'react'

import ComponentInjector from '../../../app/injector'

import fixture from '../../fixture'

import MoleculesHero from './hero'

class MoleculesHeroes extends Component {
    render () {
        return (<Fragment>
            <MoleculesHero
                media={{
                    media: fixture.image.person,
                    title: fixture.headline.short,
                    ratio: '3:1',
                }}
                caption='Large Hero'
                size='large'
            />
            <MoleculesHero
                media={{
                    media: fixture.image.person,
                    title: fixture.headline.short,
                    ratio: '5:1',
                }}
                caption='Tiny Top Left Hero'
                verticalAlign='top'
                horizontalAlign='left'
                size='small'
            />
            <MoleculesHero
                media={{
                    media: fixture.image.person,
                    title: fixture.headline.short,
                }}
                caption='Hero with native aspect ratio'
            />
        </Fragment>)
    }
}

MoleculesHeroes.propTypes = {}

MoleculesHeroes.defaultProps = {}

export default ComponentInjector.return('MoleculesHeroes', MoleculesHeroes)
