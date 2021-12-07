import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconConsulColor24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill="#E03875">
                    <path d="M12.009 23a11 11 0 117.442-19.092l-2.61 2.73a7.229 7.229 0 100 10.73l2.61 2.73A10.97 10.97 0 0112.009 23zM20.86 17.498a.901.901 0 110-1.802.901.901 0 010 1.802z" />
                    <path d="M11.939 14.383a2.383 2.383 0 11-.02-4.766 2.383 2.383 0 01.02 4.766zM21.895 14.426a.902.902 0 110-1.805.902.902 0 010 1.805zM19.214 14.313a.902.902 0 110-1.804.902.902 0 010 1.804zM21.895 11.387a.901.901 0 110-1.802.901.901 0 010 1.802zM19.214 11.49a.901.901 0 110-1.803.901.901 0 010 1.803zM20.913 8.355a.901.901 0 11-.004-1.803.901.901 0 01.004 1.803z" />
                </g>
            </svg>
        );
    }
);
