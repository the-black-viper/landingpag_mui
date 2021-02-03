import { makeStyles } from '@material-ui/core';
import React from 'react';
import useWindowPosition from '../hook/useWindowPosition';
import MediaCard from './CardTemplate';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
          }
    },
}));

const places = [
    {
        title: 'Green',
        description:
            "The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.",
        imageURL: process.env.PUBLIC_URL + '/assets/island0.jpg',
        time: 1500,
    },
    {
        title: 'Bora Bora',
        description:
            'Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise. Fish, turtles, sharks, and rays swim in the clear waters.',
        imageURL: process.env.PUBLIC_URL + '/assets/island1.jpg',
        time: 1500,
    },
];

const Content = () => {
    const classes = useStyles();
    const place1 = places[0];
    const place2 = places[1];
    console.log(place1)
    console.log(place2)
    const checked = useWindowPosition('header');
    console.log(checked)
    return (
        <div className={classes.root} id="place-to-visit">
            <MediaCard
            title={place1.title}
            description={place1.description}
            imageURL={place1.imageURL}
            checked={checked}/>
            <MediaCard
            title={place2.title}
            description={place2.description}
            imageURL={place2.imageURL}
            checked={checked}/>
        </div>
    );
};

export default Content;