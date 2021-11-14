import React from 'react';
import { projects } from '../../constants/constants';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { EducationContainer, EducationLinks, EducationParagraph, EducationTitle } from './EducationStyles';

const education = 
    { 
        title: "Bachelor's degree in Economics / (Ciências Economicas)",
        institution: 'Universidade Federal de Pernambuco',
        issueDate: 'Oct 1999',
    }

const certificates = [    
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
            
                <EducationContainer>
                    <EducationTitle>{education.institution}</EducationTitle>
                    <EducationParagraph>{education.title}</EducationParagraph>
                    <EducationParagraph>Issued {education.issueDate}</EducationParagraph>
                </EducationContainer>
            
            
            </Section>



            <Section id="certificates">
                <SectionDivider style={{marginBottom: '1rem', marginTop: '3rem'}} />
                <SectionTitle>Certifications</SectionTitle>
                {certificates.map(({title, institution, issueDate, credentialId, credentialUrl, projectsUrl}) => (
                    <EducationContainer key={credentialId}>
                        <EducationTitle>{title}</EducationTitle>
                        <EducationParagraph>{institution}</EducationParagraph>
                        <EducationParagraph>Issued {issueDate}</EducationParagraph>
                        {/* <EducationParagraph>Credential ID {credentialId}</EducationParagraph> */}
                        <EducationLinks href={credentialUrl} target='_blank'>See Credential</EducationLinks>
                        <EducationLinks href={projectsUrl} target='_blank'>See all projects</EducationLinks>
                    </EducationContainer>
                ))}
            
            
            </Section>
        </>




    )
};

export default Education;