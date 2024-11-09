/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as authenticatedLayoutImport } from './routes/(authenticated)/_layout'
import { Route as authenticatedLayoutSscImport } from './routes/(authenticated)/_layout/ssc'
import { Route as authenticatedLayoutAbcImport } from './routes/(authenticated)/_layout/abc'

// Create Virtual Routes

const authenticatedImport = createFileRoute('/(authenticated)')()

// Create/Update Routes

const authenticatedRoute = authenticatedImport.update({
  id: '/(authenticated)',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authenticatedLayoutRoute = authenticatedLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => authenticatedRoute,
} as any)

const authenticatedLayoutSscRoute = authenticatedLayoutSscImport.update({
  id: '/ssc',
  path: '/ssc',
  getParentRoute: () => authenticatedLayoutRoute,
} as any)

const authenticatedLayoutAbcRoute = authenticatedLayoutAbcImport.update({
  id: '/abc',
  path: '/abc',
  getParentRoute: () => authenticatedLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/(authenticated)': {
      id: '/(authenticated)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authenticatedImport
      parentRoute: typeof rootRoute
    }
    '/(authenticated)/_layout': {
      id: '/(authenticated)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authenticatedLayoutImport
      parentRoute: typeof authenticatedRoute
    }
    '/(authenticated)/_layout/abc': {
      id: '/(authenticated)/_layout/abc'
      path: '/abc'
      fullPath: '/abc'
      preLoaderRoute: typeof authenticatedLayoutAbcImport
      parentRoute: typeof authenticatedLayoutImport
    }
    '/(authenticated)/_layout/ssc': {
      id: '/(authenticated)/_layout/ssc'
      path: '/ssc'
      fullPath: '/ssc'
      preLoaderRoute: typeof authenticatedLayoutSscImport
      parentRoute: typeof authenticatedLayoutImport
    }
  }
}

// Create and export the route tree

interface authenticatedLayoutRouteChildren {
  authenticatedLayoutAbcRoute: typeof authenticatedLayoutAbcRoute
  authenticatedLayoutSscRoute: typeof authenticatedLayoutSscRoute
}

const authenticatedLayoutRouteChildren: authenticatedLayoutRouteChildren = {
  authenticatedLayoutAbcRoute: authenticatedLayoutAbcRoute,
  authenticatedLayoutSscRoute: authenticatedLayoutSscRoute,
}

const authenticatedLayoutRouteWithChildren =
  authenticatedLayoutRoute._addFileChildren(authenticatedLayoutRouteChildren)

interface authenticatedRouteChildren {
  authenticatedLayoutRoute: typeof authenticatedLayoutRouteWithChildren
}

const authenticatedRouteChildren: authenticatedRouteChildren = {
  authenticatedLayoutRoute: authenticatedLayoutRouteWithChildren,
}

const authenticatedRouteWithChildren = authenticatedRoute._addFileChildren(
  authenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof authenticatedLayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/abc': typeof authenticatedLayoutAbcRoute
  '/ssc': typeof authenticatedLayoutSscRoute
}

export interface FileRoutesByTo {
  '/': typeof authenticatedLayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/abc': typeof authenticatedLayoutAbcRoute
  '/ssc': typeof authenticatedLayoutSscRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/(authenticated)': typeof authenticatedRouteWithChildren
  '/(authenticated)/_layout': typeof authenticatedLayoutRouteWithChildren
  '/(authenticated)/_layout/abc': typeof authenticatedLayoutAbcRoute
  '/(authenticated)/_layout/ssc': typeof authenticatedLayoutSscRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/abc' | '/ssc'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/abc' | '/ssc'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/(authenticated)'
    | '/(authenticated)/_layout'
    | '/(authenticated)/_layout/abc'
    | '/(authenticated)/_layout/ssc'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  authenticatedRoute: typeof authenticatedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  authenticatedRoute: authenticatedRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/(authenticated)"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/(authenticated)": {
      "filePath": "(authenticated)",
      "children": [
        "/(authenticated)/_layout"
      ]
    },
    "/(authenticated)/_layout": {
      "filePath": "(authenticated)/_layout.tsx",
      "parent": "/(authenticated)",
      "children": [
        "/(authenticated)/_layout/abc",
        "/(authenticated)/_layout/ssc"
      ]
    },
    "/(authenticated)/_layout/abc": {
      "filePath": "(authenticated)/_layout/abc.tsx",
      "parent": "/(authenticated)/_layout"
    },
    "/(authenticated)/_layout/ssc": {
      "filePath": "(authenticated)/_layout/ssc.tsx",
      "parent": "/(authenticated)/_layout"
    }
  }
}
ROUTE_MANIFEST_END */