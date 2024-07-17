import React from "react";
import { About } from './about';
import { Suggestions } from './suggestions';
import { EventsView } from './events';

export const Homepage = React.lazy(() => import("./homepage"));
export const GalleryView = React.lazy(() => import("./gallery"));
export { About, Suggestions, EventsView };