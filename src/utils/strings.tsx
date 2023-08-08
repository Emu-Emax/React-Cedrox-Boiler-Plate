import React from 'react';

export const drawTextWithLineBreaks = (text: string) =>
    text.split('\n').map((line, index) => <p key={index}>{line}</p>);
