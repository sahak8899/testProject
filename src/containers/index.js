import React from 'react'
import Header from './header';
import RouteBuilder from '../routes';
import { appRedySelector } from '../store/selectors';
import { useSelector } from 'react-redux';
import Loader from '../components/loader';
export default function Main() {
    const appRedy = useSelector(appRedySelector);
    if(!appRedy){
        return <Loader/>
    }
    return (
       <>
       	<Header />
        <RouteBuilder />
       </>
    )
}
