function Timer(props) {
    console.log('> Passando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();



    return (
        <div>
            <div>{dynamicDateString} (dynamic)</div>
            <div>{props.staticDateString} (static)</div>
        </div>
    )
}

export function getStaticProps() {
    console.log('> Passando pelo getStaticProps();')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Timer