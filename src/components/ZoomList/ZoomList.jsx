import React from 'react';
import Styled from './styled/StyledZoomList';
import StyledZoomIcon from "components/ZoomList/styled/ZoomIcon";
import {urlLocations} from "routes/urlLocations";
import {Link} from "react-router-dom";

const ZoomList = () => {

    return (
        <Styled.ZoomList>
          <Styled.ZoomItem to={urlLocations.missions}>
                  <Styled.LeftCol>
                      <StyledZoomIcon />
                  </Styled.LeftCol>
                  <Styled.RightCol>
                      <Styled.ZoomTxt>
                            <Styled.ZoomLabel>
                                Meeting Id:
                            </Styled.ZoomLabel>
                          <Styled.ZoomData>
                              12344567
                          </Styled.ZoomData>
                      </Styled.ZoomTxt>

                      <Styled.ZoomTxt>
                          <Styled.ZoomLabel>
                              Password:
                          </Styled.ZoomLabel>
                          <Styled.ZoomData>
                              12344567
                          </Styled.ZoomData>
                      </Styled.ZoomTxt>
                  </Styled.RightCol>
                  <Styled.JoinButton>Join</Styled.JoinButton>
          </Styled.ZoomItem>

            <Styled.ZoomItem to={urlLocations.missions}>
                <Styled.LeftCol>
                    <StyledZoomIcon />
                </Styled.LeftCol>
                <Styled.RightCol>
                    <Styled.ZoomTxt>
                        <Styled.ZoomLabel>
                            Meeting Id:
                        </Styled.ZoomLabel>
                        <Styled.ZoomData>
                            12344567
                        </Styled.ZoomData>
                    </Styled.ZoomTxt>

                    <Styled.ZoomTxt>
                        <Styled.ZoomLabel>
                            Password:
                        </Styled.ZoomLabel>
                        <Styled.ZoomData>
                            12344567
                        </Styled.ZoomData>
                    </Styled.ZoomTxt>
                </Styled.RightCol>
                <Styled.JoinButton>Join</Styled.JoinButton>
            </Styled.ZoomItem>

        </Styled.ZoomList>
    )
};

export default ZoomList;