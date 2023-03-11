import React, { FC } from 'react';
import { Card } from 'react-bootstrap';

interface ErrorProps {
    color: string;
    caption: string;
}

const Error: FC<ErrorProps> = ({color, caption}) => {
    return (
        <div
            className='d-flex align-items-center justify-content-center' 
            style={{height: 'calc(100vh - 100px)'}}
        >
            <Card style={{height: 200, width: 600}} border={color}>
                <Card.Body
                    style={{fontSize: 25, textTransform: 'uppercase'}} 
                    className='d-flex align-items-center justify-content-center'
                >
                    {caption}
                </Card.Body>
            </Card>
      </div>
    );
};

export default Error;