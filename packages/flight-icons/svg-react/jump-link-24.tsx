import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconJumpLink24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M3.75 4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zM3 9.75A.75.75 0 013.75 9h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 013 9.75zM3.75 14a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM3.75 19a.75.75 0 000 1.5H20a.75.75 0 000-1.5H3.75zM12.952 12.238a.75.75 0 011.06-.036l2.488 2.322V8.75a3.25 3.25 0 00-3.25-3.25h-2a.75.75 0 010-1.5h2A4.75 4.75 0 0118 8.75v5.774l2.488-2.322a.75.75 0 011.024 1.096l-3.75 3.5a.75.75 0 01-1.024 0l-3.75-3.5a.75.75 0 01-.036-1.06z" />
                </g>
            </svg>
        );
    }
);