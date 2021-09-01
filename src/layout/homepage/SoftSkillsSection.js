import React from 'react'
import styled from 'styled-components'
import passionate from "../../assets/home/desktop/illustration-passionate.svg"
import friendly from "../../assets/home/desktop/illustration-friendly.svg"
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg"

const SoftSkillsWrapper = styled.section`
    place-self: center;
    width: 100%;
    max-width: var(--layout-max-width);
`

const SoftSkills = styled.ul`
    width: 100%;

    @media screen and (min-width: 1440px){
        display: flex;
        justify-content: space-between;
    }
`

const SoftSkill = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 767px){
        &:not(:last-child){
            margin-bottom: 5rem;
        }
    }

    @media screen and (min-width: 1440px){
        width: 21.875rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px){
        text-align: left;
        flex-direction: row;
        
        &:not(:last-child){
            margin-bottom: 2rem;
        }
    }
`

const SoftSkillImg = styled.img`
    width: 12.625rem;
    height: 12.625rem;
    margin-bottom: 3rem;

    @media screen and (min-width: 768px) and (max-width: 1439px){
        text-align: left;
        flex-direction: row;
        margin-bottom: 0;
        margin-right: 3rem;
    }
`

const SoftSkillTitle= styled.h3`
    margin-bottom: 2rem;
`

export default function SoftSkillsSection() {
    return (
        <SoftSkillsWrapper>
                <SoftSkills>
                    <SoftSkill>
                        <SoftSkillImg src={passionate} alt=""/>
                        <div>
                            <SoftSkillTitle>
                                Passionate
                            </SoftSkillTitle>
                            <p>
                                Each project starts with an in-depth brand research to ensure we only create products that serve a purpose.
                                We merge art, design, and technology into exciting new solutions.
                            </p>
                        </div>
                    </SoftSkill>
                    <SoftSkill>
                        <SoftSkillImg src={resourceful} alt=""/>
                        <div>
                            <SoftSkillTitle>
                                Resourceful
                            </SoftSkillTitle>
                            <p>
                                Everything that we do has a strategic purpose.
                                We use an agile approach in all of our projects and value customer collaboration.
                                It guarantees superior results that fulfill our clients’ needs.
                            </p>
                        </div>
                    </SoftSkill>
                    <SoftSkill>
                        <SoftSkillImg src={friendly} alt=""/>
                        <div>
                            <SoftSkillTitle>
                                Friendly
                            </SoftSkillTitle>
                            <p>
                                We are a group of enthusiastic folks who know how to put people first.
                                Our success depends on our customers,
                                and we strive to give them the best experience a company can provide.
                            </p>
                        </div>
                    </SoftSkill>
                </SoftSkills>
            </SoftSkillsWrapper>
    )
}
