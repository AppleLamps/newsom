"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] p-4" role="alert">
          <div className="text-center max-w-lg">
            <div className="w-16 h-16 bg-[var(--campaign-red)] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="font-[var(--font-merriweather)] text-3xl font-bold text-[var(--navy)] mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-[var(--gray-600)] mb-6">
              We encountered an unexpected error. Please refresh the page and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[var(--navy)] hover:bg-[var(--navy-light)] text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2"
              aria-label="Refresh the page"
            >
              Refresh Page
            </button>
            <p className="text-[var(--gray-400)] text-xs mt-4">
              Error: {this.state.error?.message}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
