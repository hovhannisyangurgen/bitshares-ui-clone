import React from 'react';

export default () => (
  <div>
    <div className="show-for-medium grid-block shrink footer">
      <div className="align-justify grid-block">
        <div className="grid-block">
          <div
            className="logo"
            style={{ fontSize: '1em', marginTop: 0, overflow: 'hidden' }}
          >
            <span style={{ display: 'inline-block', verticalAlign: 'top' }}>
              <span>BitShares</span>
              <span className="version">.190227</span>
            </span>
          </div>
        </div>
        <div className="grid-block shrink">
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <div className="footer-status">
              <span className="success">Germany - Nuremberg</span>
            </div>
            <div className="footer-block">
              <span>
                <span className="footer-block-title">
                  <span>Latency</span>
                </span>
                &nbsp;342ms&nbsp;/&nbsp;
                <span className="footer-block-title">
                  <span>Block</span>
                </span>
                &nbsp;#36779743
              </span>
            </div>
          </div>
          <div className="grid-block">
            <div className="introjs-launcher">
              <span>Report</span>
            </div>
            <div className="introjs-launcher">
              <span>Help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="node-access-popup" style={{ display: 'none' }}>
      <div>
        <div style={{ fontWeight: 'bold', height: 40 }}>
          <span>Switch Node</span>
          <div>
            <button
              type="button"
              role="switch"
              aria-checked="true"
              className="ant-switch ant-switch-checked"
              style={{ float: 'right', position: 'relative', top: '-15px' }}
            >
              <span className="ant-switch-inner" />
            </button>
            <p style={{ fontSize: '80%' }}>
              <span>Automatic Switching</span>:
            </p>
          </div>
        </div>
        <div className="nodes-list" style={{ display: 'none' }}>
          <div className="api-status">
            <a>
              <span
                title="API Node is disconnected"
                className="icon disconnected icon-1_5x low default-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M22.063.669c-.37 0-.738.14-1.02.422l-2.257 2.26-.404-.405c-1.532-1.532-4.22-1.532-5.752 0L10.216 5.36l.324 1.662 1.694.404 2.438-2.438c.22-.22.518-.342.835-.342.317 0 .612.121.833.342l.404.404-.947.946a1.443 1.443 0 1 0 2.041 2.041l.948-.947.402.404c.22.22.344.519.344.835 0 .316-.123.613-.344.833l-3.112 3.112 1.799.366.235 1.684 3.12-3.12a4.037 4.037 0 0 0 1.189-2.875c0-1.089-.423-2.11-1.19-2.877l-.403-.402 2.259-2.259A1.445 1.445 0 0 0 22.063.67zM6.18 9.295l-2.971 2.971a4.042 4.042 0 0 0-1.187 2.877c0 1.087.42 2.108 1.187 2.874l.404.405-2.259 2.257a1.443 1.443 0 1 0 2.042 2.041l2.259-2.259.402.405a4.041 4.041 0 0 0 2.877 1.189 4.037 4.037 0 0 0 2.874-1.19l2.26-2.258-.234-1.69-1.797-.364-2.27 2.27c-.22.221-.526.333-.833.333-.307 0-.615-.11-.835-.332l-.405-.402.948-.948A1.443 1.443 0 1 0 6.6 15.432l-.945.948-.405-.405a1.17 1.17 0 0 1-.342-.832c0-.316.122-.615.342-.835l2.947-2.947-1.695-.406z" />
                  <path
                    style={{
                      lineHeight: 'normal',
                      fontVariantLigatures: 'normal',
                      fontVariantPosition: 'normal',
                      fontVariantCaps: 'normal',
                      fontVariantNumeric: 'normal',
                      fontVariantAlternates: 'normal',
                      fontFeatureSettings: 'normal',
                      textIndent: 0,
                      textAlign: 'start',
                      textDecorationLine: 'none',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#000',
                      textTransform: 'none',
                      textOrientation: 'mixed',
                      shapePadding: 0,
                      isolation: 'auto',
                      mixBlendMode: 'normal'
                    }}
                    d="M35.403 9.888c-2.707.711-5.415 1.42-8.122 2.13l1.921 1.941-3.375 3.342 2.03 2.09 3.394-3.363 1.942 1.955z"
                    color="#000"
                    white-space="normal"
                    overflow="visible"
                  />
                </svg>
              </span>
              <span
                title="Connect to this API Node"
                className="icon connect icon-1_5x low hover-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M21.24 1.391c-.369 0-.738.14-1.02.423l-2.257 2.259-.404-.405c-1.532-1.531-4.22-1.531-5.751 0L9.394 6.082l.324 1.662 1.694.404L13.85 5.71c.22-.22.517-.342.835-.342.317 0 .612.122.832.342l.405.405-.948.945a1.443 1.443 0 1 0 2.042 2.042l.947-.948.403.405c.22.22.344.518.344.834 0 .317-.124.613-.344.833l-3.112 3.112 1.798.366.236 1.684 3.12-3.12a4.037 4.037 0 0 0 1.188-2.875c0-1.088-.423-2.11-1.188-2.876l-.405-.402 2.26-2.26a1.445 1.445 0 0 0-1.023-2.464zM6.65 8.852l-2.972 2.97A4.042 4.042 0 0 0 2.492 14.7c0 1.087.42 2.109 1.186 2.875l.405.404-2.26 2.257a1.443 1.443 0 1 0 2.042 2.042l2.26-2.26.402.405a4.041 4.041 0 0 0 2.876 1.189 4.037 4.037 0 0 0 2.875-1.189l2.259-2.259-.233-1.69-1.797-.364-2.27 2.271c-.221.22-.527.332-.834.332-.307 0-.614-.11-.834-.332l-.405-.402.948-.947a1.443 1.443 0 1 0-2.042-2.042l-.946.947-.404-.404a1.17 1.17 0 0 1-.342-.833c0-.316.122-.614.342-.835l2.947-2.947-1.696-.406zM8.54 6.97l-.967.971.322 1.66 1.695.406.968-.972-1.694-.404zM15.444 17.237l.99-.962-.235-1.684-1.799-.366-.985.958 1.796.365z" />
                </svg>
              </span>
            </a>
            Southeastern Asia - Singapore
          </div>
          <div className="api-status">
            <a>
              <span
                title="API Node is disconnected"
                className="icon disconnected icon-1_5x low default-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M22.063.669c-.37 0-.738.14-1.02.422l-2.257 2.26-.404-.405c-1.532-1.532-4.22-1.532-5.752 0L10.216 5.36l.324 1.662 1.694.404 2.438-2.438c.22-.22.518-.342.835-.342.317 0 .612.121.833.342l.404.404-.947.946a1.443 1.443 0 1 0 2.041 2.041l.948-.947.402.404c.22.22.344.519.344.835 0 .316-.123.613-.344.833l-3.112 3.112 1.799.366.235 1.684 3.12-3.12a4.037 4.037 0 0 0 1.189-2.875c0-1.089-.423-2.11-1.19-2.877l-.403-.402 2.259-2.259A1.445 1.445 0 0 0 22.063.67zM6.18 9.295l-2.971 2.971a4.042 4.042 0 0 0-1.187 2.877c0 1.087.42 2.108 1.187 2.874l.404.405-2.259 2.257a1.443 1.443 0 1 0 2.042 2.041l2.259-2.259.402.405a4.041 4.041 0 0 0 2.877 1.189 4.037 4.037 0 0 0 2.874-1.19l2.26-2.258-.234-1.69-1.797-.364-2.27 2.27c-.22.221-.526.333-.833.333-.307 0-.615-.11-.835-.332l-.405-.402.948-.948A1.443 1.443 0 1 0 6.6 15.432l-.945.948-.405-.405a1.17 1.17 0 0 1-.342-.832c0-.316.122-.615.342-.835l2.947-2.947-1.695-.406z" />
                  <path
                    style={{
                      lineHeight: 'normal',
                      fontVariantLigatures: 'normal',
                      fontVariantPosition: 'normal',
                      fontVariantCaps: 'normal',
                      fontVariantNumeric: 'normal',
                      fontVariantAlternates: 'normal',
                      fontFeatureSettings: 'normal',
                      textIndent: 0,
                      textAlign: 'start',
                      textDecorationLine: 'none',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#000',
                      textTransform: 'none',
                      textOrientation: 'mixed',
                      shapePadding: 0,
                      isolation: 'auto',
                      mixBlendMode: 'normal'
                    }}
                    d="M35.403 9.888c-2.707.711-5.415 1.42-8.122 2.13l1.921 1.941-3.375 3.342 2.03 2.09 3.394-3.363 1.942 1.955z"
                    color="#000"
                    white-space="normal"
                    overflow="visible"
                  />
                </svg>
              </span>
              <span
                title="Connect to this API Node"
                className="icon connect icon-1_5x low hover-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M21.24 1.391c-.369 0-.738.14-1.02.423l-2.257 2.259-.404-.405c-1.532-1.531-4.22-1.531-5.751 0L9.394 6.082l.324 1.662 1.694.404L13.85 5.71c.22-.22.517-.342.835-.342.317 0 .612.122.832.342l.405.405-.948.945a1.443 1.443 0 1 0 2.042 2.042l.947-.948.403.405c.22.22.344.518.344.834 0 .317-.124.613-.344.833l-3.112 3.112 1.798.366.236 1.684 3.12-3.12a4.037 4.037 0 0 0 1.188-2.875c0-1.088-.423-2.11-1.188-2.876l-.405-.402 2.26-2.26a1.445 1.445 0 0 0-1.023-2.464zM6.65 8.852l-2.972 2.97A4.042 4.042 0 0 0 2.492 14.7c0 1.087.42 2.109 1.186 2.875l.405.404-2.26 2.257a1.443 1.443 0 1 0 2.042 2.042l2.26-2.26.402.405a4.041 4.041 0 0 0 2.876 1.189 4.037 4.037 0 0 0 2.875-1.189l2.259-2.259-.233-1.69-1.797-.364-2.27 2.271c-.221.22-.527.332-.834.332-.307 0-.614-.11-.834-.332l-.405-.402.948-.947a1.443 1.443 0 1 0-2.042-2.042l-.946.947-.404-.404a1.17 1.17 0 0 1-.342-.833c0-.316.122-.614.342-.835l2.947-2.947-1.696-.406zM8.54 6.97l-.967.971.322 1.66 1.695.406.968-.972-1.694-.404zM15.444 17.237l.99-.962-.235-1.684-1.799-.366-.985.958 1.796.365z" />
                </svg>
              </span>
            </a>
            Western Europe - Netherlands - Amsterdam
          </div>
          <div className="api-status">
            <a>
              <span
                title="API Node is disconnected"
                className="icon disconnected icon-1_5x low default-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M22.063.669c-.37 0-.738.14-1.02.422l-2.257 2.26-.404-.405c-1.532-1.532-4.22-1.532-5.752 0L10.216 5.36l.324 1.662 1.694.404 2.438-2.438c.22-.22.518-.342.835-.342.317 0 .612.121.833.342l.404.404-.947.946a1.443 1.443 0 1 0 2.041 2.041l.948-.947.402.404c.22.22.344.519.344.835 0 .316-.123.613-.344.833l-3.112 3.112 1.799.366.235 1.684 3.12-3.12a4.037 4.037 0 0 0 1.189-2.875c0-1.089-.423-2.11-1.19-2.877l-.403-.402 2.259-2.259A1.445 1.445 0 0 0 22.063.67zM6.18 9.295l-2.971 2.971a4.042 4.042 0 0 0-1.187 2.877c0 1.087.42 2.108 1.187 2.874l.404.405-2.259 2.257a1.443 1.443 0 1 0 2.042 2.041l2.259-2.259.402.405a4.041 4.041 0 0 0 2.877 1.189 4.037 4.037 0 0 0 2.874-1.19l2.26-2.258-.234-1.69-1.797-.364-2.27 2.27c-.22.221-.526.333-.833.333-.307 0-.615-.11-.835-.332l-.405-.402.948-.948A1.443 1.443 0 1 0 6.6 15.432l-.945.948-.405-.405a1.17 1.17 0 0 1-.342-.832c0-.316.122-.615.342-.835l2.947-2.947-1.695-.406z" />
                  <path
                    style={{
                      lineHeight: 'normal',
                      fontVariantLigatures: 'normal',
                      fontVariantPosition: 'normal',
                      fontVariantCaps: 'normal',
                      fontVariantNumeric: 'normal',
                      fontVariantAlternates: 'normal',
                      fontFeatureSettings: 'normal',
                      textIndent: 0,
                      textAlign: 'start',
                      textDecorationLine: 'none',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#000',
                      textTransform: 'none',
                      textOrientation: 'mixed',
                      shapePadding: 0,
                      isolation: 'auto',
                      mixBlendMode: 'normal'
                    }}
                    d="M35.403 9.888c-2.707.711-5.415 1.42-8.122 2.13l1.921 1.941-3.375 3.342 2.03 2.09 3.394-3.363 1.942 1.955z"
                    color="#000"
                    white-space="normal"
                    overflow="visible"
                  />
                </svg>
              </span>
              <span
                title="Connect to this API Node"
                className="icon connect icon-1_5x low hover-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M21.24 1.391c-.369 0-.738.14-1.02.423l-2.257 2.259-.404-.405c-1.532-1.531-4.22-1.531-5.751 0L9.394 6.082l.324 1.662 1.694.404L13.85 5.71c.22-.22.517-.342.835-.342.317 0 .612.122.832.342l.405.405-.948.945a1.443 1.443 0 1 0 2.042 2.042l.947-.948.403.405c.22.22.344.518.344.834 0 .317-.124.613-.344.833l-3.112 3.112 1.798.366.236 1.684 3.12-3.12a4.037 4.037 0 0 0 1.188-2.875c0-1.088-.423-2.11-1.188-2.876l-.405-.402 2.26-2.26a1.445 1.445 0 0 0-1.023-2.464zM6.65 8.852l-2.972 2.97A4.042 4.042 0 0 0 2.492 14.7c0 1.087.42 2.109 1.186 2.875l.405.404-2.26 2.257a1.443 1.443 0 1 0 2.042 2.042l2.26-2.26.402.405a4.041 4.041 0 0 0 2.876 1.189 4.037 4.037 0 0 0 2.875-1.189l2.259-2.259-.233-1.69-1.797-.364-2.27 2.271c-.221.22-.527.332-.834.332-.307 0-.614-.11-.834-.332l-.405-.402.948-.947a1.443 1.443 0 1 0-2.042-2.042l-.946.947-.404-.404a1.17 1.17 0 0 1-.342-.833c0-.316.122-.614.342-.835l2.947-2.947-1.696-.406zM8.54 6.97l-.967.971.322 1.66 1.695.406.968-.972-1.694-.404zM15.444 17.237l.99-.962-.235-1.684-1.799-.366-.985.958 1.796.365z" />
                </svg>
              </span>
            </a>
            Western Europe - Iceland - Reykjavik
          </div>
          <div className="api-status">
            <a>
              <span
                title="API Node is disconnected"
                className="icon disconnected icon-1_5x medium default-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M22.063.669c-.37 0-.738.14-1.02.422l-2.257 2.26-.404-.405c-1.532-1.532-4.22-1.532-5.752 0L10.216 5.36l.324 1.662 1.694.404 2.438-2.438c.22-.22.518-.342.835-.342.317 0 .612.121.833.342l.404.404-.947.946a1.443 1.443 0 1 0 2.041 2.041l.948-.947.402.404c.22.22.344.519.344.835 0 .316-.123.613-.344.833l-3.112 3.112 1.799.366.235 1.684 3.12-3.12a4.037 4.037 0 0 0 1.189-2.875c0-1.089-.423-2.11-1.19-2.877l-.403-.402 2.259-2.259A1.445 1.445 0 0 0 22.063.67zM6.18 9.295l-2.971 2.971a4.042 4.042 0 0 0-1.187 2.877c0 1.087.42 2.108 1.187 2.874l.404.405-2.259 2.257a1.443 1.443 0 1 0 2.042 2.041l2.259-2.259.402.405a4.041 4.041 0 0 0 2.877 1.189 4.037 4.037 0 0 0 2.874-1.19l2.26-2.258-.234-1.69-1.797-.364-2.27 2.27c-.22.221-.526.333-.833.333-.307 0-.615-.11-.835-.332l-.405-.402.948-.948A1.443 1.443 0 1 0 6.6 15.432l-.945.948-.405-.405a1.17 1.17 0 0 1-.342-.832c0-.316.122-.615.342-.835l2.947-2.947-1.695-.406z" />
                  <path
                    style={{
                      lineHeight: 'normal',
                      fontVariantLigatures: 'normal',
                      fontVariantPosition: 'normal',
                      fontVariantCaps: 'normal',
                      fontVariantNumeric: 'normal',
                      fontVariantAlternates: 'normal',
                      fontFeatureSettings: 'normal',
                      textIndent: 0,
                      textAlign: 'start',
                      textDecorationLine: 'none',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#000',
                      textTransform: 'none',
                      textOrientation: 'mixed',
                      shapePadding: 0,
                      isolation: 'auto',
                      mixBlendMode: 'normal'
                    }}
                    d="M35.403 9.888c-2.707.711-5.415 1.42-8.122 2.13l1.921 1.941-3.375 3.342 2.03 2.09 3.394-3.363 1.942 1.955z"
                    color="#000"
                    white-space="normal"
                    overflow="visible"
                  />
                </svg>
              </span>
              <span
                title="Connect to this API Node"
                className="icon connect icon-1_5x medium hover-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M21.24 1.391c-.369 0-.738.14-1.02.423l-2.257 2.259-.404-.405c-1.532-1.531-4.22-1.531-5.751 0L9.394 6.082l.324 1.662 1.694.404L13.85 5.71c.22-.22.517-.342.835-.342.317 0 .612.122.832.342l.405.405-.948.945a1.443 1.443 0 1 0 2.042 2.042l.947-.948.403.405c.22.22.344.518.344.834 0 .317-.124.613-.344.833l-3.112 3.112 1.798.366.236 1.684 3.12-3.12a4.037 4.037 0 0 0 1.188-2.875c0-1.088-.423-2.11-1.188-2.876l-.405-.402 2.26-2.26a1.445 1.445 0 0 0-1.023-2.464zM6.65 8.852l-2.972 2.97A4.042 4.042 0 0 0 2.492 14.7c0 1.087.42 2.109 1.186 2.875l.405.404-2.26 2.257a1.443 1.443 0 1 0 2.042 2.042l2.26-2.26.402.405a4.041 4.041 0 0 0 2.876 1.189 4.037 4.037 0 0 0 2.875-1.189l2.259-2.259-.233-1.69-1.797-.364-2.27 2.271c-.221.22-.527.332-.834.332-.307 0-.614-.11-.834-.332l-.405-.402.948-.947a1.443 1.443 0 1 0-2.042-2.042l-.946.947-.404-.404a1.17 1.17 0 0 1-.342-.833c0-.316.122-.614.342-.835l2.947-2.947-1.696-.406zM8.54 6.97l-.967.971.322 1.66 1.695.406.968-.972-1.694-.404zM15.444 17.237l.99-.962-.235-1.684-1.799-.366-.985.958 1.796.365z" />
                </svg>
              </span>
            </a>
            North America - U.S.A.
          </div>
          <div className="api-status">
            <a>
              <span
                title="API Node is disconnected"
                className="icon disconnected icon-1_5x medium default-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M22.063.669c-.37 0-.738.14-1.02.422l-2.257 2.26-.404-.405c-1.532-1.532-4.22-1.532-5.752 0L10.216 5.36l.324 1.662 1.694.404 2.438-2.438c.22-.22.518-.342.835-.342.317 0 .612.121.833.342l.404.404-.947.946a1.443 1.443 0 1 0 2.041 2.041l.948-.947.402.404c.22.22.344.519.344.835 0 .316-.123.613-.344.833l-3.112 3.112 1.799.366.235 1.684 3.12-3.12a4.037 4.037 0 0 0 1.189-2.875c0-1.089-.423-2.11-1.19-2.877l-.403-.402 2.259-2.259A1.445 1.445 0 0 0 22.063.67zM6.18 9.295l-2.971 2.971a4.042 4.042 0 0 0-1.187 2.877c0 1.087.42 2.108 1.187 2.874l.404.405-2.259 2.257a1.443 1.443 0 1 0 2.042 2.041l2.259-2.259.402.405a4.041 4.041 0 0 0 2.877 1.189 4.037 4.037 0 0 0 2.874-1.19l2.26-2.258-.234-1.69-1.797-.364-2.27 2.27c-.22.221-.526.333-.833.333-.307 0-.615-.11-.835-.332l-.405-.402.948-.948A1.443 1.443 0 1 0 6.6 15.432l-.945.948-.405-.405a1.17 1.17 0 0 1-.342-.832c0-.316.122-.615.342-.835l2.947-2.947-1.695-.406z" />
                  <path
                    style={{
                      lineHeight: 'normal',
                      fontVariantLigatures: 'normal',
                      fontVariantPosition: 'normal',
                      fontVariantCaps: 'normal',
                      fontVariantNumeric: 'normal',
                      fontVariantAlternates: 'normal',
                      fontFeatureSettings: 'normal',
                      textIndent: 0,
                      textAlign: 'start',
                      textDecorationLine: 'none',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#000',
                      textTransform: 'none',
                      textOrientation: 'mixed',
                      shapePadding: 0,
                      isolation: 'auto',
                      mixBlendMode: 'normal'
                    }}
                    d="M35.403 9.888c-2.707.711-5.415 1.42-8.122 2.13l1.921 1.941-3.375 3.342 2.03 2.09 3.394-3.363 1.942 1.955z"
                    color="#000"
                    white-space="normal"
                    overflow="visible"
                  />
                </svg>
              </span>
              <span
                title="Connect to this API Node"
                className="icon connect icon-1_5x medium hover-icon"
              >
                <svg viewBox="0 0 24 24" version="1.2">
                  <path d="M21.24 1.391c-.369 0-.738.14-1.02.423l-2.257 2.259-.404-.405c-1.532-1.531-4.22-1.531-5.751 0L9.394 6.082l.324 1.662 1.694.404L13.85 5.71c.22-.22.517-.342.835-.342.317 0 .612.122.832.342l.405.405-.948.945a1.443 1.443 0 1 0 2.042 2.042l.947-.948.403.405c.22.22.344.518.344.834 0 .317-.124.613-.344.833l-3.112 3.112 1.798.366.236 1.684 3.12-3.12a4.037 4.037 0 0 0 1.188-2.875c0-1.088-.423-2.11-1.188-2.876l-.405-.402 2.26-2.26a1.445 1.445 0 0 0-1.023-2.464zM6.65 8.852l-2.972 2.97A4.042 4.042 0 0 0 2.492 14.7c0 1.087.42 2.109 1.186 2.875l.405.404-2.26 2.257a1.443 1.443 0 1 0 2.042 2.042l2.26-2.26.402.405a4.041 4.041 0 0 0 2.876 1.189 4.037 4.037 0 0 0 2.875-1.189l2.259-2.259-.233-1.69-1.797-.364-2.27 2.271c-.221.22-.527.332-.834.332-.307 0-.614-.11-.834-.332l-.405-.402.948-.947a1.443 1.443 0 1 0-2.042-2.042l-.946.947-.404-.404a1.17 1.17 0 0 1-.342-.833c0-.316.122-.614.342-.835l2.947-2.947-1.696-.406zM8.54 6.97l-.967.971.322 1.66 1.695.406.968-.972-1.694-.404zM15.444 17.237l.99-.962-.235-1.684-1.799-.366-.985.958 1.796.365z" />
                </svg>
              </span>
            </a>
            Western Europe - Germany
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 15 }}>
        <a>
          <span>Advanced settings</span>
        </a>
      </div>
    </div>
    <div className="introjs-launcher show-for-small-only">
      <span>Help</span>
    </div>
  </div>
);
