import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const educationData = [
    { 
        title: "Bachelor's degree in Economics",
        institution: 'Universidade Federal de Pernambuco',
        issueDate: 'Oct 1999',
        credentialId: '',
        credentialUrl: '',
        projectsUrl: '',   
    },
    { 
        title: 'Computer Science for Web Programming',
        institution: 'Harvard University',
        issueDate: 'Jun 2021',
        credentialId: 'c2cefb1c98a84179ad06ea51262e162a',
        credentialUrl: 'https://credentials.edx.org/credentials/c2cefb1c98a84179ad06ea51262e162a',
        projectsUrl: 'https://github.com/duckbox72/CS50WEB-projects',  
    },
    { 
        title: 'Computer Science for Artificial Intelligence',
        institution: 'Harvard University',
        issueDate: 'Oct 2021',
        credentialId: '7772d8388c694146b22a7b493750d2a2',
        credentialUrl: 'https://credentials.edx.org/credentials/7772d8388c694146b22a7b493750d2a2', 
        projectsUrl: 'https://github.com/duckbox72/CS50AI-projects',    
    },
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