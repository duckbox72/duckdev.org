import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const data = [
    { title: 'Certificate Title', }
]


const Education = () => {
    return (
        <Section id="education">
            <SectionDivider style={{marginBottom: '1rem'}} />
            <SectionTitle>Education & Certifications</SectionTitle>
        </Section>




    )
};

export default Education;