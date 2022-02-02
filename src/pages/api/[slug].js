import React, { useContext } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout';
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@material-ui/core';
import NextLink from 'next/link'
import Project from './Project/Project';
import db from '../../utils/db'
 
export default function ProductScreen(props) {
    
    const { project } = props;
   
    return ( 
       <div>
           { project.name }
       </div>
    );
}

