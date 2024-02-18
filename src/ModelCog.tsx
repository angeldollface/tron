/*
TRON by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing React to define our
// component.
import React from 'react';

// Importing types for Typescript.
import { ReactElement } from 'react'
import { ModifierFlags } from 'typescript';

// Importing our render function.
import { renderModel } from './render';

// Defining our class-based component.
export class ModelCog extends React.Component {

    // Empty rendering function 
    //since "renderModel" does everything.
    render(): ReactElement {
        return (
          <>
          </>			
        );
    }

    // Only using "renderModel"
    // after the virtual DOM
    // is synced up.
    componentDidMount(): void {
        const modelURL: string = 'https://angeldollface.boo/doll-cdn/models/StageMoon.glb';
        const textureURL: string = 'https://angeldollface.boo/doll-cdn/images/matcaps/05.png';
        const symbolName: string = 'Moon';
        const stageLightColor: number = 0xFFFFFF;
        const borderLightColor: number = 0xEA1573;
        renderModel(
            textureURL,
            symbolName,
            modelURL,
            borderLightColor,
            stageLightColor
        );        
    }
}

export default ModelCog;
