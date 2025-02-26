import * as React from 'react';
declare class PanViewer extends React.Component<{
    image: string;
    alt?: string;
}> {
    state: {
        dx: number;
        dy: number;
        zoom: number;
        rotation: number;
    };
    renderPanZoomControls: () => JSX.Element;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element[];
    zoomIn: () => void;
    zoomOut: () => void;
    rotateLeft: () => void;
    onPan: (dx: number, dy: number) => void;
}
export default PanViewer;
