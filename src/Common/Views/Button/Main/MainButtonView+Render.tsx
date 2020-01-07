import React from "react";
import * as Styled from "./MainButtonView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import { MainButtonView } from "./MainButtonView";
import Lottie from "react-lottie";
import animationData from "Resources/loading.json";

export const display = (obj: MainButtonView) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Styled.Container
      {...obj.props}
      onClick={obj.onClick}
      loading={obj.props.loading}
    >
      {obj.props.loading ? (
        <Lottie
          options={defaultOptions}
          height={30}
          width={30}
          isStopped={false}
          isPaused={false}
        />
      ) : (
        <Styled.Label>{obj.props.title}</Styled.Label>
      )}
    </Styled.Container>
  );
};
