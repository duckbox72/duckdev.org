import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const data = [
    { title: 'Certificate Title', }
]


const Education = () => {
    return (
        <>
            <Section id="education">
                <SectionDivider style={{marginBottom: '1rem', marginTop: '3rem'}} />
                <SectionTitle>Education</SectionTitle>
            </Section>







            <Section id="certificates">
                <SectionDivider style={{marginBottom: '1rem', marginTop: '3rem'}} />
                <SectionTitle>Certifications</SectionTitle>
            </Section>
        </>




    )
};

export default Education;