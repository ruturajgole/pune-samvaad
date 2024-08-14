import React from "react";
import { About } from './about';
import { Suggestions } from './suggestions';

export const Homepage = React.lazy(() => import("./homepage"));
export const GalleryView = React.lazy(() => import("./gallery"));
export const Contact = React.lazy(() => import("./contact"));
export { About, Suggestions };