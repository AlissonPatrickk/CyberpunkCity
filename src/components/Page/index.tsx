import React from "react";
import DefaultOverLayContent from "../DefaultOverlayContent";
import { ModelsWrapper } from "../Model";
import { ModelSection } from "../Model";
import { Container, Spacer } from "./styles";
import UniqueOverlay from "../UniqueOverlay";

const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Cahnbuya City',
                        'Drauken City',
                        'Durnnsten City',
                        'Duurhnow City',
                        'Laulfth City',
                        'Zinvall City',

                    ].map(modelName => (
                        <ModelSection 
                        key={modelName}
                        className="colored"
                        modelName={modelName}
                        overlayNode={
                                <DefaultOverLayContent 
                                    label={modelName}
                                    description="Order Online for Delivery"
                                />
                            }
                        />
                    ))}           
                </div>
                <Spacer />
                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    );
};

export default Page;