/* eslint-disable jsx-a11y/anchor-has-content */
import React, { FC, AnchorHTMLAttributes, forwardRef, Ref } from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

interface INextComposedProps {
  as: string;
  href: string;
  prefetch: boolean;
  aRef?: Ref<HTMLAnchorElement>;
}

type IProps = AnchorHTMLAttributes<HTMLAnchorElement> & INextComposedProps

// @ts-ignore
const NextComposed = forwardRef<HTMLAnchorElement, IProps>(({ as, href, prefetch, ...restProps }, ref) => (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...restProps} />
    </NextLink>
));


interface ILinkProps {
  activeClassName: string;
  as: string;
  className: string;
  href: string;
  innerRef: Ref<HTMLAnchorElement>;
  naked: boolean;
  onClick: () => void;
  prefetch: boolean;
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link: FC<ILinkProps> = (props) => {
  const {
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;
  const router = useRouter();

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} {...other} />;
  }

  return <MuiLink component={NextComposed} className={className} ref={innerRef} {...other} />;
};

export default forwardRef<HTMLAnchorElement, ILinkProps>((props, ref) => <Link {...props} innerRef={ref} />);
