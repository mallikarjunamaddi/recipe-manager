import React from 'react';

function PreparationSteps(props) {
    return (
        <ol>
            {
                props.steps.map((step, index) => {
                    return (
                        <li key={index}>
                            {step}dfsa
                        </li>
                    );
                })
            }
        </ol>
    );
}

export default PreparationSteps;