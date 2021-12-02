import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

export function RedictoryToLaunchpad() {
  return <Redirect to="/add/" />
}

export function RedirectLaunchpad(props: RouteComponentProps<{subItem: string}>) {
  const {
    match: {
      params: { subItem },
    },
  } = props;
  if (subItem?.length) {
    <Redirect to={`launchpad/${subItem}`} />
  }
  return <Redirect to={`launchpad/tokens`} />
}