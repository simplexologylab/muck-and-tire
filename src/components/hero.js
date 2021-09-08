import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import ScrollIndicator from './scroll-indicator';
import Logo from '../assets/logo.svg';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(90vh - 2 * var(--header-height));
  position: relative;

  ${mq.gt.sm} {
    min-height: calc(90vh - var(--header-height));
  }
`;

const StyledLogo = styled(Logo)`
  width: 100px;
  height: 100px;
`;

const StyledIntroduction = styled.div`
  color: var(--primary-color);
  font-weight: normal;
`;
const StyledTitle = styled.h1`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 100px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 60px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  max-width: 550px;
`;

const Hero = ({ data }) => {
  const { introduction, title, tagline, description, ctaLink, ctaLabel } = data;

  // const image = hero_image ? hero_image.childImageSharp.fluid : null;

  return (
    <>
      <StyledHeroSection>
        <StyledIntroduction>{introduction}</StyledIntroduction>
        <StyledTitle>{title}</StyledTitle>
        <StyledTagline>
           {/* <StyledLogo />  */}
           {tagline}
        </StyledTagline>
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
        <ButtonLink label={ctaLabel} link={ctaLink} />
        <ScrollIndicator />
      </StyledHeroSection>
    </>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
