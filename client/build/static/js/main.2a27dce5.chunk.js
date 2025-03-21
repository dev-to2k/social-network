(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    11: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return r;
      }),
        s.d(t, 'c', function () {
          return i;
        }),
        s.d(t, 'f', function () {
          return o;
        }),
        s.d(t, 'e', function () {
          return d;
        }),
        s.d(t, 'b', function () {
          return j;
        }),
        s.d(t, 'd', function () {
          return b;
        });
      var c = s(4),
        a = s(20),
        n = s(2),
        l = s(9);
      const r = {
          LOADING: 'LOADING_PROFILE',
          GET_USER: 'GET_PROFILE_USER',
          FOLLOW: 'FOLLOW',
          UNFOLLOW: 'UNFOLLOW',
          GET_ID: 'GET_PROFILE_ID',
          GET_POSTS: 'GET_PROFILE_POSTS',
          UPDATE_POST: 'UPDATE_PROFILE_POST',
        },
        i = (e) => async (t) => {
          const { auth: s, id: a } = e;
          t({ type: r.GET_ID, payload: a });
          try {
            t({ type: r.LOADING, payload: !0 });
            const e = await Object(c.b)('user/'.concat(a), s.token),
              n = await Object(c.b)('user_posts/'.concat(a), s.token),
              l = await e,
              i = await n;
            t({ type: r.GET_USER, payload: l.data }),
              t({ type: r.GET_POSTS, payload: { ...i.data, _id: a, page: 2 } }),
              t({ type: r.LOADING, payload: !1 });
          } catch (l) {
            t({ type: n.c.ALERT, payload: { error: l.response.data.msg } });
          }
        },
        o = (e) => async (t) => {
          const { userData: s, auth: a } = e;
          if (!s.fullname) return t({ type: n.c.ALERT, payload: { error: 'Please add your full name' } });
          if (s.fullname.length > 25) return t({ type: n.c.ALERT, payload: { error: 'Full name too long.' } });
          const l = await Object(c.c)('user', { ...s }, a.token);
          t({ type: n.c.AUTH, payload: { ...a, user: { ...a.user, ...s } } }),
            t({ type: n.c.ALERT, payload: { success: l.data.msg } });
        },
        d = (e) => async (t) => {
          const { avatar: s, auth: l } = e;
          try {
            let e;
            if ((t({ type: n.c.ALERT, payload: { loading: !0 } }), s)) {
              e = await Object(a.b)([s]);
              const r = await Object(c.c)('user/avatar', { avatar: s ? e[0].url : l.username.avatar }, l.token);
              t({ type: n.c.AUTH, payload: { ...l, user: { ...l.user, avatar: s ? e[0].url : s.user.avatar } } }),
                t({ type: n.c.ALERT, payload: { success: r.data.msg } });
            }
          } catch (r) {
            t({ type: n.c.ALERT, payload: { error: r.response.data.msg } });
          }
        },
        j = (e) => async (t) => {
          let s;
          const { user: a, auth: i, users: o, socket: d } = e;
          o.every((e) => e._id !== a._id)
            ? (s = { ...a, followers: [...a.followers, i.user] })
            : o.forEach((e) => {
                e._id === a._id && (s = { ...e, followers: [...e.followers, i.user] });
              }),
            t({ type: r.FOLLOW, payload: s }),
            t({ type: n.c.AUTH, payload: { ...i, user: { ...i.user, following: [...i.user.following, s] } } });
          try {
            const e = await Object(c.c)('user/'.concat(a._id, '/follow'), null, i.token);
            d.emit('follow', e.data.newUser);
            const n = {
              id: i.user._id,
              text: '\u0111\xe3 theo d\xf5i b\u1ea1n',
              recipients: [s._id],
              url: '/profile/'.concat(i.user._id),
            };
            t(Object(l.b)({ auth: i, msg: n, socket: d }));
          } catch (j) {
            t({ type: n.c.ALERT, payload: { error: j.response.data.msg } });
          }
        },
        b = (e) => async (t) => {
          const { user: s, auth: a, users: i, socket: o } = e;
          let d;
          i.every((e) => e._id !== s._id)
            ? (d = { ...s, followers: Object(n.a)(s.followers, a.user._id) })
            : i.forEach((e) => {
                e._id === s._id && (d = { ...e, followers: Object(n.a)(e.followers, a.user._id) });
              }),
            t({ type: r.UNFOLLOW, payload: d }),
            t({
              type: n.c.AUTH,
              payload: { ...a, user: { ...a.user, following: Object(n.a)(a.user.following, d._id) } },
            });
          try {
            const e = await Object(c.c)('user/'.concat(s._id, '/unfollow'), null, a.token);
            o.emit('follow', e.data.newUser);
            const n = {
              id: a.user._id,
              text: '\u0111\xe3 theo d\xf5i b\u1ea1n',
              recipients: [d._id],
              url: '/profile/'.concat(a.user._id),
            };
            t(Object(l.f)({ auth: a, msg: n, socket: o }));
          } catch (j) {
            t({ type: n.c.ALERT, payload: { error: j.response.data.msg } });
          }
        };
    },
    115: function (e, t) {
      function s(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      (s.keys = function () {
        return [];
      }),
        (s.resolve = s),
        (e.exports = s),
        (s.id = 115);
    },
    139: function (e, t, s) {
      var c = {
        './discover': 73,
        './discover.js': 73,
        './home': 43,
        './home.js': 43,
        './login': 38,
        './login.js': 38,
        './message': 40,
        './message/': 40,
        './message/[id]': 78,
        './message/[id].js': 78,
        './message/index': 40,
        './message/index.js': 40,
        './post/[id]': 75,
        './post/[id].js': 75,
        './profile/[id]': 77,
        './profile/[id].js': 77,
        './register': 42,
        './register.js': 42,
      };
      function a(e) {
        var t = n(e);
        return s(t);
      }
      function n(e) {
        if (!s.o(c, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return c[e];
      }
      (a.keys = function () {
        return Object.keys(c);
      }),
        (a.resolve = n),
        (e.exports = a),
        (a.id = 139);
    },
    143: function (e, t, s) {},
    144: function (e, t, s) {
      'use strict';
      s.r(t);
      var c = s(1),
        a = s.n(c),
        n = s(41),
        l = s.n(n),
        r = (s(91), s.p + 'static/media/client_src_audio_ringring.278d7816.mp3'),
        i = s(3),
        o = s(2),
        d = s(8),
        j = s(0);
      var b = function () {
          const { call: e, peer: t, auth: s, socket: a } = Object(i.c)((e) => e),
            n = Object(i.b)(),
            [l, b] = Object(c.useState)(0),
            [m, u] = Object(c.useState)(0),
            [h, O] = Object(c.useState)(0),
            [p, x] = Object(c.useState)(0),
            [f, y] = Object(c.useState)(!1),
            [g, v] = Object(c.useState)(null),
            [N, _] = Object(c.useState)(null),
            w = Object(c.useRef)(),
            E = Object(c.useRef)();
          Object(c.useEffect)(() => {
            const e = () => {
              O((e) => e + 1), setTimeout(e, 1e3);
            };
            return e(), () => O(0);
          }, []),
            Object(c.useEffect)(() => {
              u(h % 60), b(parseInt(h / 60, 10)), x(parseInt(h / 3600, 10));
            }, [h]);
          const T = Object(c.useCallback)(
              (e, t, c) => {
                if (e.recipient !== s.user._id || c) {
                  const c = {
                    sender: e.sender,
                    recipient: e.recipient,
                    text: '',
                    media: [],
                    call: { video: e.video, times: t },
                    createdAt: new Date().toISOString(),
                  };
                  n(Object(d.b)({ msg: c, auth: s, socket: a }));
                }
              },
              [s, n, a]
            ),
            k = () => {
              g && g.forEach((e) => e.stop()), N && N.close();
              const t = f ? h : 0;
              a.emit('endCall', { ...e, times: t }), T(e, t), n({ type: o.c.CALL, payload: null });
            };
          Object(c.useEffect)(() => {
            if (!f) {
              const t = setTimeout(() => {
                a.emit('endCall', { ...e, times: 0 }), T(e, 0), n({ type: o.c.CALL, payload: null });
              }, 15e3);
              return () => clearTimeout(t);
            }
            return O(0), null;
          }, [n, f, e, a, g]),
            Object(c.useEffect)(
              () => (
                a.on('endCallToClient', (e) => {
                  g && g.forEach((e) => e.stop()), N && N.close(), T(e, e.times), n({ type: o.c.CALL, payload: null });
                }),
                () => a.off('endCallToClient')
              ),
              [a, n, g, T, N]
            );
          const S = (e) => {
              const t = { audio: !0, video: e };
              return navigator.mediaDevices.getUserMedia(t);
            },
            L = (e, t) => {
              const s = e;
              (s.srcObject = t), s.play();
            },
            A = () => {
              S(e.video).then((s) => {
                L(w.current, s);
                const c = s.getTracks();
                v(c);
                const a = t.call(e.peerId, s);
                a.on('stream', (e) => {
                  L(E.current, e);
                }),
                  y(!0),
                  _(a);
              });
            };
          Object(c.useEffect)(
            () => (
              t.on('call', (t) => {
                S(e.video).then((e) => {
                  w.current && L(w.current, e);
                  const s = e.getTracks();
                  v(s),
                    t.answer(e),
                    t.on('stream', (e) => {
                      E.current && L(E.current, e);
                    }),
                    y(!0),
                    _(t);
                });
              }),
              () => t.removeListener('call')
            ),
            [t, e.video]
          ),
            Object(c.useEffect)(
              () => (
                a.on('callerDisconnect', () => {
                  g && g.forEach((e) => e.stop()), N && N.close();
                  T(e, f ? h : 0, !0),
                    n({ type: o.c.CALL, payload: null }),
                    n({ type: o.c.ALERT, payload: { error: ''.concat(e.fullname, ' disconnect') } });
                }),
                () => a.off('callerDisconnect')
              ),
              [a, g, n, e, T, f, h, N]
            );
          const C = (e) => {
            e.pause(), (e.currentTime = 0);
          };
          return (
            Object(c.useEffect)(() => {
              const e = new Audio(r);
              return (
                f
                  ? C(e)
                  : ((e) => {
                      e.play();
                    })(e),
                () => C(e)
              );
            }, [f]),
            Object(j.jsxs)('div', {
              className: 'call_modal',
              children: [
                Object(j.jsx)('div', {
                  className: 'call_box',
                  style: { display: f && e.video ? 'none' : 'flex' },
                  children: Object(j.jsxs)('div', {
                    children: [
                      Object(j.jsx)('img', {
                        src: e.avatar,
                        className: 'img-cover rounded-circle circle-big',
                        alt: 'avatar',
                      }),
                      Object(j.jsx)('h4', { children: e.username }),
                      Object(j.jsx)('h6', { children: e.fullname }),
                      f
                        ? Object(j.jsxs)('div', {
                            children: [
                              ' ',
                              Object(j.jsx)('span', { children: p.toString().length < 2 ? '0'.concat(p) : p }),
                              Object(j.jsx)('span', { children: ':' }),
                              Object(j.jsx)('span', { children: l.toString().length < 2 ? '0'.concat(l) : l }),
                              Object(j.jsx)('span', { children: ':' }),
                              Object(j.jsx)('span', { children: m.toString().length < 2 ? '0'.concat(m) : m }),
                            ],
                          })
                        : Object(j.jsx)('div', {
                            children: e.video
                              ? Object(j.jsx)('span', { children: '\u0111ang g\u1ecdi video...' })
                              : Object(j.jsx)('span', { children: '\u0111ang g\u1ecdi...' }),
                          }),
                      !f &&
                        Object(j.jsxs)('div', {
                          className: 'timer',
                          children: [
                            Object(j.jsx)('small', { children: l.toString().length < 2 ? '0'.concat(l) : l }),
                            Object(j.jsx)('small', { children: ':' }),
                            Object(j.jsx)('small', { children: m.toString().length < 2 ? '0'.concat(m) : m }),
                          ],
                        }),
                      Object(j.jsxs)('div', {
                        className: 'call_menu',
                        children: [
                          Object(j.jsx)('span', {
                            className: 'material-icons call-end',
                            onClick: k,
                            children: 'call_end',
                          }),
                          e.recipient === s.user._id &&
                            !f &&
                            Object(j.jsx)(j.Fragment, {
                              children: e.video
                                ? Object(j.jsx)('span', {
                                    className: 'material-icons videocam',
                                    onClick: A,
                                    children: 'videocam',
                                  })
                                : Object(j.jsx)('span', {
                                    className: 'material-icons call',
                                    onClick: A,
                                    children: 'call',
                                  }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(j.jsxs)('div', {
                  className: 'show_video',
                  style: { opacity: f && e.video ? '1' : '0' },
                  children: [
                    Object(j.jsx)('video', {
                      ref: w,
                      className: 'you_video',
                      playsInline: !0,
                      muted: !0,
                      children: Object(j.jsx)('track', { kind: 'captions' }),
                    }),
                    Object(j.jsx)('video', {
                      ref: E,
                      className: 'other_video',
                      playsInline: !0,
                      children: Object(j.jsx)('track', { kind: 'captions' }),
                    }),
                    Object(j.jsxs)('div', {
                      className: 'time_video',
                      children: [
                        Object(j.jsx)('span', { children: p.toString().length < 2 ? '0'.concat(p) : p }),
                        Object(j.jsx)('span', { children: ':' }),
                        Object(j.jsx)('span', { children: l.toString().length < 2 ? '0'.concat(l) : l }),
                        Object(j.jsx)('span', { children: ':' }),
                        Object(j.jsx)('span', { children: m.toString().length < 2 ? '0'.concat(m) : m }),
                      ],
                    }),
                    Object(j.jsx)('button', {
                      type: 'button',
                      className: 'material-icons text-danger end_call',
                      onClick: k,
                      children: 'call_end',
                    }),
                  ],
                }),
              ],
            })
          );
        },
        m = s(80),
        u = s.n(m),
        h = s(5),
        O = s(10),
        p = s(9),
        x = s(37),
        f = s(81),
        y = s.p + 'static/media/client_src_audio_got-it-done-613.89a311f0.mp3',
        g = s(6);
      var v = function () {
        const { auth: e, socket: t, notify: s, online: a, call: n } = Object(i.c)((e) => e),
          l = Object(i.b)(),
          r = Object(c.useRef)();
        return (
          Object(c.useEffect)(() => {
            t.emit('joinUser', e.user);
          }, [e.user, t]),
          Object(c.useEffect)(
            () => (
              t.on('likePostToClient', (e) => {
                l({ type: g.a.UPDATE_POST, payload: e });
              }),
              () => t.off('likePostToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('unLikePostToClient', (e) => {
                l({ type: g.a.UPDATE_POST, payload: e });
              }),
              () => t.off('unLikePostToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('createCommentToClient', (e) => {
                l({ type: g.a.UPDATE_POST, payload: e });
              }),
              () => t.off('createCommentToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('deleteCommentToClient', (e) => {
                l({ type: g.a.UPDATE_POST, payload: e });
              }),
              () => t.off('deleteCommentToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('likeCommentToClient', (e) => {
                l({ type: g.a.UPDATE_POST, payload: e });
              }),
              () => t.off('likeCommentToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('unLikeCommentToClient', (e) => {
                l({ type: g.a.UPDATE_POST, payload: e });
              }),
              () => t.off('unLikeCommentToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('followToClient', (t) => {
                l({ type: o.c.AUTH, payload: { ...e, user: t } });
              }),
              () => t.off('followToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('unFollowToClient', (t) => {
                l({ type: o.c.AUTH, payload: { ...e, user: t } });
              }),
              () => t.off('unFollowToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('createNotifyToClient', (e) => {
                var t, c, a;
                l({ type: p.a.CREATE_NOTIFY, payload: e }),
                  s.sound && r.current.play(),
                  (t = ''.concat(e.user.fullname, ' ').concat(e.text)),
                  (c = e.user.avatar),
                  (a = e.url),
                  (new Notification('T-NETWORK', { body: t, icon: c }).onclick = (e) => {
                    e.preventDefault(), window.open(a, '_blank');
                  });
              }),
              () => t.off('createNotifyToClient')
            ),
            [t, l, s.sound]
          ),
          Object(c.useEffect)(
            () => (
              t.on('removeNotifyToClient', (e) => {
                l({ type: p.a.REMOVE_NOTIFY, payload: e });
              }),
              () => t.off('removeNotifyToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(() => {
            t.on('addMessageToClient', (e) => {
              l({ type: d.a.ADD_MESSAGE, payload: e }),
                l({ type: d.a.ADD_USER, payload: { ...e.user, text: e.text, media: e.media } });
            });
          }, [t, l]),
          Object(c.useEffect)(() => {
            t.emit('checkUserOnline', e.user);
          }, [t, e.user]),
          Object(c.useEffect)(
            () => (
              t.on('checkUserOnlineToMe', (e) => {
                e.forEach((e) => {
                  a.includes(e.id) || l({ type: o.c.ONLINE, payload: e.id });
                });
              }),
              () => t.off('checkUserOnlineToMe')
            ),
            [t, l, a]
          ),
          Object(c.useEffect)(
            () => (
              t.on('checkUserOnlineToClient', (e) => {
                a.includes(e) || l({ type: o.c.ONLINE, payload: e });
              }),
              () => t.off('checkUserOnlineToClient')
            ),
            [t, l, a]
          ),
          Object(c.useEffect)(
            () => (
              t.on('CheckUserOffline', (e) => {
                l({ type: o.c.OFFLINE, payload: e });
              }),
              () => t.off('CheckUserOffline')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('callUserToClient', (e) => {
                l({ type: o.c.CALL, payload: e });
              }),
              () => t.off('callUserToClient')
            ),
            [t, l]
          ),
          Object(c.useEffect)(
            () => (
              t.on('userBusy', () => {
                l({ type: o.c.ALERT, payload: { error: ''.concat(n.fullname, ' is busy!') } });
              }),
              () => t.off('userBusy')
            ),
            [t, l, n]
          ),
          Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)('audio', {
              controls: !0,
              ref: r,
              className: 'd-none',
              children: [
                Object(j.jsx)('track', { kind: 'captions' }),
                Object(j.jsx)('source', { src: y, type: 'audio/mp3' }),
              ],
            }),
          })
        );
      };
      function N() {
        return Object(j.jsx)('div', {
          className: 'wrap-loader',
          children: Object(j.jsxs)('div', {
            className: 'blocks',
            children: [
              Object(j.jsx)('div', { className: 'block orange' }),
              Object(j.jsx)('div', { className: 'block blue' }),
            ],
          }),
        });
      }
      function _(e) {
        let { msg: t, handleShow: s, bgColor: c } = e;
        return Object(j.jsxs)('div', {
          className: 'toast show position-fixed text-light '.concat(c),
          style: { top: '5px', right: '5px', minWidth: '200px', zIndex: 50 },
          children: [
            Object(j.jsxs)('div', {
              className: 'toast-header text-light d-flex justify-content-between '.concat(c),
              children: [
                Object(j.jsx)('strong', { className: 'text-light ms-1', children: t.title }),
                Object(j.jsx)('button', {
                  type: 'button',
                  className: 'ms-3 mb-1 text-white',
                  'data-dismiss': 'toast',
                  style: { border: 'none', background: 'transparent' },
                  onClick: s,
                  children: Object(j.jsx)('i', { className: 'fas fa-times' }),
                }),
              ],
            }),
            Object(j.jsx)('div', { className: 'toas-body p-3', children: t.body }),
          ],
        });
      }
      function w() {
        const { alert: e } = Object(i.c)((e) => e),
          t = Object(i.b)();
        return Object(j.jsxs)(j.Fragment, {
          children: [
            e.loading && Object(j.jsx)(N, {}),
            e.error &&
              Object(j.jsx)(_, {
                msg: { title: 'Error', body: e.error },
                handleShow: () => t({ type: o.c.ALERT, payload: {} }),
                bgColor: 'bg-danger',
              }),
            e.success &&
              Object(j.jsx)(_, {
                msg: { title: 'Success', body: e.success },
                handleShow: () => t({ type: o.c.ALERT, payload: {} }),
                bgColor: 'bg-success',
              }),
          ],
        });
      }
      var E = s(21),
        T = s.n(E);
      var k = function () {
          const { auth: e, notify: t } = Object(i.c)((e) => e),
            s = Object(i.b)(),
            c = () => {
              s({ type: p.a.UPDATE_SOUND, payload: !t.sound });
            };
          return Object(j.jsxs)('div', {
            className: 'notify-modal',
            style: { width: '100%' },
            children: [
              Object(j.jsxs)('div', {
                className: 'title px-2 mb-2 d-flex justify-content-between align-items-center',
                children: [
                  Object(j.jsx)('span', { className: 'fs-5 fw-bold', children: 'Th\xf4ng b\xe1o' }),
                  t.sound
                    ? Object(j.jsx)('button', {
                        type: 'button',
                        onClick: c,
                        children: Object(j.jsx)('i', {
                          className: 'fas fa-bell text-danger',
                          style: { fontSize: '1.2rem' },
                        }),
                      })
                    : Object(j.jsx)('button', {
                        type: 'button',
                        onClick: c,
                        children: Object(j.jsx)('i', {
                          className: 'fas fa-bell-slash text-danger',
                          style: { fontSize: '1.2rem' },
                        }),
                      }),
                ],
              }),
              Object(j.jsx)('div', {
                className: 'body p-2',
                children: t.data.map((t) =>
                  Object(j.jsx)(
                    'div',
                    {
                      className: 'sub-notify',
                      children: Object(j.jsx)(h.b, {
                        to: ''.concat(t.url),
                        onClick: () =>
                          ((t) => {
                            s(Object(p.e)({ msg: t, auth: e }));
                          })(t),
                        children: Object(j.jsxs)('div', {
                          className: 'd-flex text-dark',
                          children: [
                            Object(j.jsx)('div', {
                              children: Object(j.jsx)('img', {
                                src: t.user.avatar,
                                className: 'rounded-circle circle img-cover',
                                alt: 'avatar',
                              }),
                            }),
                            Object(j.jsxs)('div', {
                              className: 'px-2 w-100',
                              children: [
                                Object(j.jsxs)('p', {
                                  className: 'mb-0',
                                  children: [
                                    Object(j.jsx)('strong', { children: t.user.fullname }),
                                    Object(j.jsxs)('span', { children: ['\xa0', t.text, ': ', t.content] }),
                                  ],
                                }),
                                Object(j.jsxs)('div', {
                                  className: 'd-flex justify-content-between align-items-center',
                                  children: [
                                    Object(j.jsxs)('small', {
                                      className: 'text-muted',
                                      children: [
                                        Object(j.jsx)('i', { className: 'fas fa-image fw-bold text-primary me-2' }),
                                        T()(t.createdAt).fromNow(),
                                      ],
                                    }),
                                    !t.isRead && Object(j.jsx)('i', { className: 'fas fa-circle text-primary' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    },
                    t._id
                  )
                ),
              }),
              Object(j.jsx)('hr', {}),
              Object(j.jsx)('div', {
                className: 'px-2',
                children: Object(j.jsx)('p', {
                  className: 'mb-0 text-end',
                  children: Object(j.jsx)('button', {
                    type: 'button',
                    onClick: () => {
                      const c = t.data.filter((e) => !1 === e.isRead);
                      return 0 === c.length ||
                        window.confirm(
                          'B\u1ea1n c\xf3 '.concat(
                            c.length,
                            ' th\xf4ng b\xe1o ch\u01b0a \u0111\u1ecdc. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a t\u1ea5t c\u1ea3 kh\xf4ng?'
                          )
                        )
                        ? s(Object(p.c)(e.token))
                        : null;
                    },
                    children: Object(j.jsx)('span', {
                      className: 'hover-underline pointer text-primary',
                      children: 'Xo\xe1 t\u1ea5t c\u1ea3',
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        S = s(23);
      function L() {
        const { auth: e, notify: t } = Object(i.c)((e) => e),
          s = Object(i.b)();
        return Object(j.jsxs)('ul', {
          className: 'navbar-nav flex-row justify-content-end align-items-center',
          children: [
            [
              { label: 'Home', icon: 'fas fa-home', path: '/' },
              { label: 'Discover', icon: 'fas fa-globe-americas', path: '/discover' },
              { label: 'Message', icon: 'fab fa-facebook-messenger', path: '/message' },
            ].map((e) =>
              Object(j.jsx)(
                'li',
                {
                  className: 'nav-item mx-2',
                  children: Object(j.jsx)(h.c, {
                    className:
                      'btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center nav-link text-dark',
                    exact: !0,
                    activeClassName: 'active-click',
                    to: e.path,
                    children: Object(j.jsx)('i', { className: e.icon }),
                  }),
                },
                e.label
              )
            ),
            Object(j.jsxs)('li', {
              className: 'nav-item mx-2 dropdown notify',
              children: [
                Object(j.jsxs)('button', {
                  type: 'button',
                  className:
                    'btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center position-relative',
                  'data-bs-toggle': 'dropdown',
                  id: 'dropdownNotify',
                  children: [
                    Object(j.jsx)('span', { className: 'material-icons', children: 'notifications' }),
                    t.data.length > 0
                      ? Object(j.jsxs)('span', {
                          className: 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger',
                          children: [
                            t.data.length,
                            Object(j.jsx)('span', { className: 'visually-hidden', children: 'unread messages' }),
                          ],
                        })
                      : '',
                  ],
                }),
                Object(j.jsx)('ul', {
                  className: 'dropdown-menu shadow px-2 border',
                  'aria-labelledby': 'dropownNotify',
                  children: Object(j.jsx)(k, {}),
                }),
              ],
            }),
            Object(j.jsx)('li', {
              className: 'nav-item user-username',
              children: Object(j.jsxs)(h.b, {
                to: '/profile/'.concat(e.user._id),
                className: 'd-flex align-items-center',
                children: [
                  Object(j.jsx)('img', {
                    src: e.user.avatar,
                    className: 'rounded-circle circle img-cover',
                    alt: 'avatar',
                  }),
                  Object(j.jsx)('span', { className: 'text-white d-none d-xxl-block ms-2', children: e.user.username }),
                ],
              }),
            }),
            Object(j.jsxs)('li', {
              className: 'nav-item dropdown',
              children: [
                Object(j.jsx)('button', {
                  className: 'nav-link text-dark text-center rounded-circle circle button-dropdown',
                  style: { paddingTop: '1px' },
                  id: 'navbarDropdown',
                  'data-bs-toggle': 'dropdown',
                  'aria-expanded': 'false',
                  type: 'button',
                  children: Object(j.jsx)('i', { className: 'fas fa-sort-down fs-4' }),
                }),
                Object(j.jsxs)('ul', {
                  className: 'dropdown-menu',
                  'aria-labelledby': 'navbarDropdown',
                  children: [
                    Object(j.jsx)('li', {
                      className: 'p-2',
                      children: Object(j.jsxs)(h.b, {
                        to: '/profile/'.concat(e.user._id),
                        children: [
                          Object(j.jsx)('img', {
                            src: e.user.avatar,
                            className: 'img-fluid rounded-circle me-2 circle-sm img-cover',
                            alt: 'avatar',
                          }),
                          Object(j.jsx)('span', { className: 'text-dark', children: e.user.username }),
                        ],
                      }),
                    }),
                    Object(j.jsx)('li', { children: Object(j.jsx)('hr', { className: 'dropdown-divider' }) }),
                    Object(j.jsx)('li', {
                      className: 'p-2',
                      children: Object(j.jsxs)(h.b, {
                        className: 'dropdown-item p-0 d-flex',
                        to: '/',
                        onClick: () => s(Object(S.b)()),
                        children: [Object(j.jsx)('i', { className: 'fas fa-sign-out-alt me-2 fs-24' }), 'Logout'],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var A = s(4),
        C = s(17);
      function P() {
        const [e, t] = Object(c.useState)(''),
          [s, a] = Object(c.useState)([]),
          [n, l] = Object(c.useState)(!1),
          { auth: r } = Object(i.c)((e) => e),
          d = Object(i.b)(),
          b = () => {
            t(''), a([]);
          };
        return Object(j.jsx)('form', {
          className: 'd-flex',
          onSubmit: async (t) => {
            if ((t.preventDefault(), e))
              try {
                l(!0);
                const t = await Object(A.b)('search?fullname='.concat(e), r.token);
                a(t.data.users), l(!1);
              } catch (s) {
                d({ type: o.c.ALERT, payload: { error: s.response.data.msg } });
              }
          },
          children: Object(j.jsxs)('div', {
            className: 'search-input',
            children: [
              Object(j.jsx)('input', {
                type: 'text',
                placeholder: 'Nh\u1eadp \u0111\u1ec3 t\xecm ki\u1ebfm...',
                onChange: (e) => {
                  t(e.target.value.toLowerCase().replace(/ /g, ''));
                },
              }),
              Object(j.jsx)('div', {
                className: 'icon',
                children: Object(j.jsx)('button', {
                  type: 'submit',
                  children: Object(j.jsx)('span', { className: 'material-icons', children: 'search' }),
                }),
              }),
              n && Object(j.jsx)('div', { className: 'loader' }),
              Object(j.jsx)('div', {
                className: 'users shadow rounded',
                children:
                  e &&
                  s.map((e) =>
                    Object(j.jsx)(
                      h.b,
                      { to: '/profile/'.concat(e._id), onClick: b, children: Object(j.jsx)(C.a, { user: e }) },
                      e._id
                    )
                  ),
              }),
            ],
          }),
        });
      }
      function D() {
        return Object(j.jsx)('div', {
          className: 'container-fluid py-1 header bg-primary',
          children: Object(j.jsxs)('div', {
            className: 'row align-items-center',
            children: [
              Object(j.jsx)('div', {
                className: 'col-sm-12 col-md-2 col-lg-2 col-xl-3 left',
                children: Object(j.jsx)(h.c, {
                  className: 'navbar-brand ms-4 text-white',
                  to: '/',
                  onClick: () => window.scrollTo({ top: 0 }),
                  children: 'T-Network',
                }),
              }),
              Object(j.jsx)('div', {
                className: 'col-sm-12 col-md-5 col-lg-6 col-xl-5 center',
                children: Object(j.jsx)(P, {}),
              }),
              Object(j.jsx)('div', {
                className: 'col-sm-12 col-md-5 col-lg-4 col-xl-4 right',
                children: Object(j.jsx)(L, {}),
              }),
            ],
          }),
        });
      }
      var R = s(24),
        I = s.n(R),
        U = s(30),
        F = s(18),
        G = s(27);
      const M = (e) => {
        let { position: t, setCurrentLocation: s } = e;
        return Object(j.jsxs)('div', {
          className: 'map bg-light rounded p-3 position-relative',
          children: [
            Object(j.jsx)('button', {
              type: 'button',
              className: 'btn p-0 position-absolute end-0 top-0',
              onClick: () => s(null),
              children: Object(j.jsx)('span', {
                className: 'material-icons-outlined text-danger pointer',
                children: 'close',
              }),
            }),
            Object(j.jsx)('h6', { children: 'V\u1ecb tr\xed c\u1ee7a b\u1ea1n' }),
            Object(j.jsxs)('p', { className: 'mb-0', children: ['Qu\u1ed1c gia: ', t.countryName] }),
            Object(j.jsxs)('p', { className: 'mb-0', children: ['T\u1ec9nh: ', t.principalSubdivision] }),
            Object(j.jsxs)('p', { className: 'mb-0', children: ['Th\xe0nh ph\u1ed1: ', t.city] }),
            Object(j.jsxs)('p', { className: 'mb-0', children: ['\u0110\u1ecba ph\u01b0\u01a1ng: ', t.locality] }),
            Object(j.jsxs)('p', { className: 'mb-0', children: ['V\u0129 \u0111\u1ed9: ', t.latitude] }),
            Object(j.jsxs)('p', { className: 'mb-0', children: ['Kinh \u0111\u1ed9: ', t.longitude] }),
            Object(j.jsxs)('p', { className: 'mb-0', children: ['L\u1ee5c \u0111\u1ecba: ', t.continent] }),
            Object(j.jsxs)('p', { className: 'mb-0', children: ['Plus Code: ', t.plusCode] }),
          ],
        });
      };
      var H = function () {
        const [e, t] = Object(c.useState)(null),
          [s, a] = Object(c.useState)([]),
          [n, l] = Object(c.useState)(!1),
          [r, d] = Object(c.useState)(''),
          [b, m] = Object(c.useState)(''),
          { auth: u, status: h, socket: O } = Object(i.c)((e) => e),
          p = Object(i.b)(),
          x = Object(c.useRef)(),
          f = Object(c.useRef)(),
          y = (e) => {
            const t = [...s];
            t.splice(e, 1), a(t);
          },
          v = () => {
            l(!0),
              navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia &&
                navigator.mediaDevices
                  .getUserMedia({ video: !0 })
                  .then((e) => {
                    (x.current.srcObject = e), x.current.play();
                    const t = e.getTracks();
                    d(t[0]);
                  })
                  .catch((e) => console.log(e));
          };
        Object(c.useEffect)(() => {
          h.onEdit && (m(h.content), a(h.images));
        }, [h]);
        const N = () => {
          navigator.geolocation
            ? navigator.geolocation.getCurrentPosition(
                async (e) => {
                  try {
                    const { latitude: s, longitude: c } = e.coords,
                      a = await I.a.get('https://api.bigdatacloud.net/data/reverse-geocode-client', {
                        params: { latitude: s, longitude: c, localityLanguage: 'vn' },
                      });
                    t(a.data);
                  } catch (s) {
                    console.error(s);
                  }
                },
                (e) => {
                  p({ type: o.c.ALERT, payload: { error: e.message } });
                }
              )
            : p({
                type: o.c.ALERT,
                payload: {
                  error:
                    '\u0110\u1ecbnh v\u1ecb \u0111\u1ecba l\xfd kh\xf4ng \u0111\u01b0\u1ee3c tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n h\u1ed7 tr\u1ee3',
                },
              });
        };
        return Object(j.jsx)('div', {
          className: 'status_modal',
          children: Object(j.jsx)('div', {
            className: 'status_wrap width-682 rounded-3 shadow bg-white p-3',
            children: Object(j.jsxs)('form', {
              onSubmit: (e) => {
                e.preventDefault(),
                  0 === s.length && p({ type: o.c.ALERT, payload: { error: 'Please add photo.' } }),
                  h.onEdit
                    ? p(Object(g.j)({ content: b, images: s, auth: u, status: h }))
                    : p(Object(g.b)({ content: b, images: s, auth: u, socket: O })),
                  m(''),
                  a([]),
                  r && r.stop(),
                  p({ type: o.c.STATUS, payload: !1 });
              },
              children: [
                Object(j.jsxs)('div', {
                  className: 'header position-relative mb-3',
                  children: [
                    Object(j.jsx)('h4', { className: 'text-center mb-0', children: 'T\u1ea1o b\xe0i vi\u1ebft' }),
                    Object(j.jsx)('button', {
                      type: 'button',
                      className:
                        'position-absolute d-flex justify-content-center align-items-center btn btn-edit rounded-circle circle',
                      onClick: () => p({ type: o.c.STATUS, payload: !1 }),
                      children: Object(j.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                    }),
                  ],
                }),
                Object(j.jsx)('hr', { className: 'mt-2' }),
                Object(j.jsxs)('div', {
                  className: 'body mb-3',
                  children: [
                    Object(j.jsxs)('div', {
                      className: 'd-flex mb-3',
                      children: [
                        Object(j.jsx)('img', {
                          src: u.user.avatar,
                          className: 'img-fluid rounded-circle circle me-2 img-cover',
                          alt: 'avatar',
                        }),
                        Object(j.jsx)('span', { className: 'fw-600', children: u.user.fullname }),
                      ],
                    }),
                    Object(j.jsx)('div', {
                      className: 'form-floating',
                      children: Object(j.jsx)(U.a, {
                        onChange: (e) => m(e.target.value),
                        value: b,
                        placeholder: 'B\u1ea1n \u0111ang ngh\u0129 g\xec?',
                      }),
                    }),
                    e && Object(j.jsx)(M, { position: e, setCurrentLocation: t }),
                    Object(j.jsx)('div', {
                      className: 'show_images my-3',
                      children: s.map((e, t) =>
                        Object(j.jsxs)(
                          'div',
                          {
                            id: 'file_img',
                            children: [
                              e.camera
                                ? Object(F.a)(e.camera)
                                : e.url
                                ? Object(j.jsx)(j.Fragment, {
                                    children: e.url.match(/video/i) ? Object(F.b)(e.url) : Object(F.a)(e.url),
                                  })
                                : Object(j.jsx)(j.Fragment, {
                                    children: e.type.match(/video/i)
                                      ? Object(F.b)(URL.createObjectURL(e))
                                      : Object(F.a)(URL.createObjectURL(e)),
                                  }),
                              Object(j.jsx)('span', {
                                className: 'shadow-sm',
                                role: 'button',
                                tabIndex: 0,
                                onKeyDown: () => y(t),
                                onClick: () => y(t),
                                children: '\xd7',
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                    n &&
                      Object(j.jsxs)(j.Fragment, {
                        children: [
                          Object(j.jsxs)('div', {
                            className: 'stream position-relative',
                            children: [
                              Object(j.jsx)('video', {
                                src: '',
                                className: 'rounded-3',
                                autoPlay: !0,
                                muted: !0,
                                ref: x,
                                width: '100%',
                                height: '100%',
                              }),
                              Object(j.jsx)('button', {
                                className:
                                  'btn btn-edit rounded-circle circle-sm d-flex justify-content-center align-items-center',
                                type: 'button',
                                onClick: () => {
                                  r.stop(), l(!1);
                                },
                                children: Object(j.jsx)('span', {
                                  className: 'material-icons-outlined fs-6',
                                  children: 'close',
                                }),
                              }),
                              Object(j.jsx)('canvas', { className: 'd-none', ref: f }),
                            ],
                          }),
                          Object(j.jsx)('p', {
                            className: 'text-center',
                            children: Object(j.jsx)('button', {
                              className:
                                'mx-auto btn btn-danger rounded-circle d-flex justify-content-center align-items-center circle',
                              type: 'button',
                              onClick: () => {
                                const e = x.current.clientWidth,
                                  t = x.current.clientHeight;
                                f.current.setAttribute('width', e), f.current.setAttribute('height', t);
                                f.current.getContext('2d').drawImage(x.current, 0, 0, e, t);
                                const c = f.current.toDataURL();
                                a([...s, { camera: c }]);
                              },
                              children: Object(j.jsx)('span', {
                                className: 'material-icons-outlined',
                                children: 'monochrome_photos',
                              }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                Object(j.jsxs)('div', {
                  className: 'footer',
                  children: [
                    Object(j.jsxs)('div', {
                      className: 'p-3 rounded-3 mb-3 border row mx-0 shadow-sm',
                      children: [
                        Object(j.jsx)('div', {
                          className: 'col-md-5 d-flex align-items-center fw-600',
                          children: Object(j.jsx)('span', { children: 'Th\xeam v\xe0o b\xe0i vi\u1ebft' }),
                        }),
                        Object(j.jsx)('div', {
                          className: 'col-md-7',
                          children: Object(j.jsxs)('div', {
                            className: 'd-flex justify-content-end',
                            children: [
                              Object(j.jsx)('div', {
                                className:
                                  'p-2 d-flex btn-hover rounded-circle circle justify-content-center align-items-center',
                                children: Object(j.jsxs)('label', {
                                  htmlFor: 'file',
                                  style: { height: '24px' },
                                  children: [
                                    Object(j.jsx)('span', {
                                      className: 'material-icons-outlined text-success pointer',
                                      children: 'photo_library',
                                    }),
                                    Object(j.jsx)('input', {
                                      type: 'file',
                                      id: 'file',
                                      name: 'file',
                                      accept: 'image/*,video/*',
                                      multiple: !0,
                                      onChange: (e) => {
                                        const t = [...e.target.files];
                                        let c = '';
                                        const n = [];
                                        return (
                                          t.forEach(
                                            (e) => (
                                              e || (c = 'The image does not exists!'),
                                              e.size > 5242880 && (c = 'The image/video largest is 5mb.'),
                                              n.push(e)
                                            )
                                          ),
                                          c && p({ type: o.c.ALERT, payload: { error: c } }),
                                          a([...s, ...n]),
                                          null
                                        );
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              Object(j.jsx)('div', {
                                className:
                                  'p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center',
                                children: Object(j.jsx)('span', {
                                  className: 'material-icons-outlined text-danger pointer',
                                  onKeyDown: v,
                                  onClick: v,
                                  role: 'button',
                                  tabIndex: 0,
                                  children: 'video_camera_front',
                                }),
                              }),
                              Object(j.jsx)('div', {
                                className:
                                  'p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center',
                                children: Object(j.jsx)(G.a, { setContent: m, content: b }),
                              }),
                              Object(j.jsx)('div', {
                                className:
                                  'p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center',
                                children: Object(j.jsx)('span', {
                                  className: 'material-icons-outlined text-danger pointer',
                                  role: 'button',
                                  tabIndex: 0,
                                  onClick: N,
                                  onKeyDown: N,
                                  children: 'place',
                                }),
                              }),
                              Object(j.jsx)('div', {
                                className:
                                  'p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center',
                                children: Object(j.jsx)('span', {
                                  className: 'material-icons-outlined pointer',
                                  children: 'more_horiz',
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(j.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-primary w-100 fw-600',
                      children: '\u0110\u0103ng',
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      function K() {
        return Object(j.jsx)('div', {
          className: 'd-flex justify-content-center align-items-center',
          style: { height: '100vh' },
          children: Object(j.jsx)('h1', { children: '404 | Not Found.' }),
        });
      }
      const V = (e) => {
        try {
          return a.a.createElement(s(139)('./'.concat(e)).default);
        } catch (t) {
          return Object(j.jsx)(K, {});
        }
      };
      var z = () => {
        const { page: e, id: t } = Object(O.useParams)(),
          { auth: s } = Object(i.c)((e) => e);
        let c = '';
        return s.token && (c = t ? ''.concat(e, '/[id]') : ''.concat(e)), V(c);
      };
      var B = function (e) {
          return localStorage.getItem('firstLogin')
            ? Object(j.jsx)(O.Route, { ...e })
            : Object(j.jsx)(O.Redirect, { to: '/' });
        },
        Y = s(43),
        W = s(38),
        X = s(42);
      var q = function () {
          const { auth: e, status: t, call: s } = Object(i.c)((e) => e),
            a = Object(i.b)();
          return (
            Object(c.useEffect)(() => {
              a(Object(S.c)());
              const e = Object(f.io)();
              return a({ type: o.c.SOCKET, payload: e }), () => e.close();
            }, [a]),
            Object(c.useEffect)(() => {
              e.token && (a(Object(g.e)(e.token)), a(Object(x.getSuggestions)(e.token)), a(Object(p.d)(e.token)));
            }, [a, e.token]),
            Object(c.useEffect)(() => {
              'Notification' in window
                ? 'granted' === Notification.permission ||
                  ('denied' !== Notification.permission && Notification.requestPermission().then((e) => {}))
                : alert('This browser does not support desktop notification');
            }, []),
            Object(c.useEffect)(() => {
              const e = new u.a(void 0, { path: '/', secure: !0 });
              a({ type: o.c.PEER, payload: e });
            }, [a]),
            Object(j.jsxs)(h.a, {
              children: [
                Object(j.jsx)(w, {}),
                e.token && Object(j.jsx)(D, {}),
                t && Object(j.jsx)(H, {}),
                e.token && Object(j.jsx)(v, {}),
                s && Object(j.jsx)(b, {}),
                Object(j.jsx)(O.Route, { exact: !0, path: '/', component: e.token ? Y.default : W.default }),
                Object(j.jsx)(O.Route, { exact: !0, path: '/login', component: W.default }),
                Object(j.jsx)(O.Route, { exact: !0, path: '/register', component: X.default }),
                Object(j.jsx)(B, { exact: !0, path: '/:page', component: z }),
                Object(j.jsx)(B, { exact: !0, path: '/:page/:id', component: z }),
              ],
            })
          );
        },
        J = (s(143), s(31)),
        Z = s(85),
        Q = s(86);
      const $ = {};
      var ee = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === o.c.ALERT ? t.payload : e;
      };
      const te = {};
      var se = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === o.c.AUTH ? t.payload : e;
      };
      var ce = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === o.c.CALL ? t.payload : e;
      };
      const { DISCOVER_TYPES: ae } = s(44),
        ne = { loading: !1, posts: [], result: 9, page: 2, firstLoad: !1 };
      var le = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case ae.LOADING:
            return { ...e, loading: t.payload };
          case ae.GET_POSTS:
            return { ...e, posts: t.payload.posts, result: t.payload.result, firstLoad: !0 };
          case ae.UPDATE_POST:
            return { ...e, posts: t.payload.posts, result: t.payload.result, page: e.page + 1 };
          default:
            return e;
        }
      };
      const re = { users: [], resultUsers: 0, data: [], firstLoad: !1 };
      var ie = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case d.a.ADD_USER:
            return e.users.every((e) => e._id !== t.payload._id) ? { ...e, users: [t.payload, ...e.users] } : e;
          case d.a.ADD_MESSAGE:
            return {
              ...e,
              data: e.data.map((e) =>
                e._id === t.payload.recipient || e._id === t.payload.sender
                  ? { ...e, messages: [...e.messages, t.payload], result: e.result + 1 }
                  : e
              ),
              users: e.users.map((e) =>
                e._id === t.payload.recipient || e._id === t.payload.sender
                  ? { ...e, text: t.payload.text, media: t.payload.media, call: t.payload.call }
                  : e
              ),
            };
          case d.a.GET_CONVERSATIONS:
            return { ...e, users: t.payload.newArr, resultUsers: t.payload.result, firstLoad: !0 };
          case d.a.GET_MESSAGES:
            return { ...e, data: [...e.data, t.payload] };
          case d.a.UPDATE_MESSAGES:
            return { ...e, data: Object(o.b)(e.data, t.payload._id, t.payload) };
          case d.a.DELETE_MESSAGES:
            return {
              ...e,
              data: e.data.map((e) => (e._id === t.payload._id ? { ...e, messages: t.payload.newData } : e)),
            };
          case d.a.DELETE_CONVERSATION:
            return { ...e, users: Object(o.a)(e.users, t.payload), data: Object(o.a)(e.data, t.payload) };
          case d.a.CHECK_ONLINE_OFFLINE:
            return {
              ...e,
              users: e.users.map((e) => (t.payload.includes(e._id) ? { ...e, online: !0 } : { ...e, online: !1 })),
            };
          default:
            return e;
        }
      };
      const oe = { loading: !1, data: [], sound: !1 };
      var de = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case p.a.GET_NOTIFIES:
            return { ...e, data: t.payload };
          case p.a.CREATE_NOTIFY:
            return { ...e, data: [t.payload, ...e.data] };
          case p.a.REMOVE_NOTIFY:
            return { ...e, data: e.data.filter((e) => e.id !== t.payload.id || e.url !== t.payload.url) };
          case p.a.UPDATE_NOTIFY:
            return { ...e, data: Object(o.b)(e.data, t.payload._id, t.payload) };
          case p.a.UPDATE_SOUND:
            return { ...e, sound: t.payload };
          case p.a.DELETE_ALL_NOTIFIES:
            return { ...e, data: t.payload };
          default:
            return e;
        }
      };
      var je = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case o.c.ONLINE:
            return [...e, t.payload];
          case o.c.OFFLINE:
            return e.filter((e) => e !== t.payload);
          default:
            return e;
        }
      };
      var be = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === o.c.PEER ? t.payload : e;
      };
      var me = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case g.a.GET_POST:
            return [...e, t.payload];
          case g.a.UPDATE_POST:
            return Object(o.b)(e, t.payload._id, t.payload);
          default:
            return e;
        }
      };
      const ue = { posts: [], result: 0, page: 2, loading: !1 };
      var he = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case g.a.CREATE_POST:
              return { ...e, posts: [t.payload, ...e.posts] };
            case g.a.LOADING_POST:
              return { ...e, loading: t.payload };
            case g.a.GET_POSTS:
              return { ...e, posts: t.payload.posts, result: t.payload.result, page: t.payload.page };
            case g.a.UPDATE_POST:
              return { ...e, posts: Object(o.b)(e.posts, t.payload._id, t.payload) };
            case g.a.DELETE_POST:
              return { ...e, posts: Object(o.a)(e.posts, t.payload._id) };
            default:
              return e;
          }
        },
        Oe = s(11);
      const pe = { loading: !1, ids: [], users: [], userPosts: [] };
      var xe = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case Oe.a.LOADING:
            return { ...e, loading: t.payload };
          case Oe.a.GET_USER:
            return { ...e, users: [...e.users, t.payload.user] };
          case Oe.a.FOLLOW:
          case Oe.a.UNFOLLOW:
            return { ...e, users: Object(o.b)(e.users, t.payload._id, t.payload) };
          case Oe.a.GET_ID:
            return { ...e, ids: [...e.ids, t.payload] };
          case Oe.a.GET_POSTS:
            return { ...e, userPosts: [...e.userPosts, t.payload] };
          case Oe.a.UPDATE_POST:
            return { ...e, userPosts: Object(o.b)(e.userPosts, t.payload._id, t.payload) };
          default:
            return e;
        }
      };
      var fe = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === o.c.SOCKET ? t.payload : e;
      };
      var ye = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === o.c.STATUS ? t.payload : e;
      };
      const { SUGGES_TYPES: ge } = s(37),
        ve = { loading: !1, users: [] };
      var Ne = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case ge.LOADING:
              return { ...e, loading: t.payload };
            case ge.GET_USERS:
              return { ...e, users: t.payload.users };
            default:
              return e;
          }
        },
        _e = Object(J.combineReducers)({
          auth: se,
          alert: ee,
          profile: xe,
          status: ye,
          homePosts: he,
          postDetails: me,
          discover: le,
          suggestions: Ne,
          socket: fe,
          notify: de,
          message: ie,
          online: je,
          call: ce,
          peer: be,
        });
      const we = Object(J.createStore)(_e, Object(Z.composeWithDevTools)(Object(J.applyMiddleware)(Q.a)));
      var Ee = (e) => {
        let { children: t } = e;
        return Object(j.jsx)(i.a, { store: we, children: t });
      };
      var Te = (e) => {
        e &&
          e instanceof Function &&
          s
            .e(3)
            .then(s.bind(null, 148))
            .then((t) => {
              let { getCLS: s, getFID: c, getFCP: a, getLCP: n, getTTFB: l } = t;
              s(e), c(e), a(e), n(e), l(e);
            });
      };
      l.a.render(
        Object(j.jsx)(a.a.StrictMode, { children: Object(j.jsx)(Ee, { children: Object(j.jsx)(q, {}) }) }),
        document.getElementById('root')
      ),
        Te();
    },
    17: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return n;
      });
      var c = s(5),
        a = s(0);
      function n(e) {
        const { user: t, children: s, setShowFollowers: n, setShowFollowing: l, msg: r } = e;
        return Object(a.jsxs)('div', {
          className: 'd-flex p-3 user align-items-center text-wrap justify-content-between',
          children: [
            Object(a.jsxs)(c.b, {
              to: '/profile/'.concat(t._id),
              onClick: () => {
                n && n(!1), l && l(!1);
              },
              className: 'text-dark fw-600 d-flex',
              children: [
                Object(a.jsx)('img', {
                  src: t.avatar,
                  className: 'me-1 img-cover rounded-circle circle',
                  alt: 'avatar',
                }),
                Object(a.jsxs)('div', {
                  className: 'd-flex flex-column',
                  children: [
                    Object(a.jsx)('span', { children: t.fullname }),
                    Object(a.jsx)('small', {
                      children: r
                        ? ((e) =>
                            Object(a.jsxs)(a.Fragment, {
                              children: [
                                Object(a.jsx)('div', { children: e.text }),
                                e.media.length > 0 &&
                                  Object(a.jsxs)('div', {
                                    children: [e.media.length, ' ', Object(a.jsx)('i', { className: 'fas fa-image' })],
                                  }),
                                e.call &&
                                  Object(a.jsx)('span', {
                                    className: 'material-icons',
                                    children:
                                      0 === e.call.times
                                        ? e.call.video
                                          ? 'videocam_off'
                                          : 'phone_disabled'
                                        : e.call.video
                                        ? 'video_camera_front'
                                        : 'call',
                                  }),
                              ],
                            }))(t)
                        : '',
                    }),
                  ],
                }),
              ],
            }),
            s,
          ],
        });
      }
    },
    18: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return a;
      }),
        s.d(t, 'b', function () {
          return n;
        });
      s(1);
      var c = s(0);
      const a = (e) => Object(c.jsx)('img', { src: e, alt: 'images', className: 'rounded-3 img-fluid' }),
        n = (e) =>
          Object(c.jsx)('video', {
            controls: !0,
            src: e,
            alt: 'images',
            className: 'rounded-3',
            children: Object(c.jsx)('track', { kind: 'captions' }),
          });
    },
    2: function (e, t, s) {
      'use strict';
      s.d(t, 'c', function () {
        return c;
      }),
        s.d(t, 'b', function () {
          return a;
        }),
        s.d(t, 'a', function () {
          return n;
        });
      const c = {
          AUTH: 'AUTH',
          ALERT: 'ALERT',
          STATUS: 'STATUS',
          SOCKET: 'SOCKET',
          ONLINE: 'ONLINE',
          OFFLINE: 'OFFLINE',
          CALL: 'CALL',
          PEER: 'PEER',
        },
        a = (e, t, s) => e.map((e) => (e._id === t ? s : e)),
        n = (e, t) => e.filter((e) => e._id !== t);
    },
    20: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return c;
      }),
        s.d(t, 'b', function () {
          return a;
        });
      const c = (e) => {
          let t = '';
          return (
            e || (t = 'File does not exists.'),
            e.size > 1048576 && (t = 'The largest file is 1mb'),
            'image/jpeg' !== e.type && 'image/png' !== e.type && (t = 'The image is incorrect'),
            t
          );
        },
        a = async (e) => {
          const t = [];
          for (const s of e) {
            const e = new FormData();
            s.camera ? e.append('file', s.camera) : e.append('file', s),
              e.append('upload_preset', 'z7zord5p'),
              e.append('cloud_name', 'to2k');
            const c = await fetch('https://api.cloudinary.com/v1_1/to2k/image/upload', {
              method: 'POST',
              body: e,
            }).then((e) => e.json());
            t.push({ public_id: c.public_id, url: c.secure_url });
          }
          return t;
        };
    },
    22: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return o;
      });
      var c = s(1),
        a = s(3),
        n = s(84),
        l = s(8),
        r = s(11),
        i = s(0);
      function o(e) {
        let { user: t } = e;
        const s = Object(n.useHistory)(),
          [o, d] = Object(c.useState)(!1),
          [j, b] = Object(c.useState)(!1),
          { auth: m, profile: u, socket: h } = Object(a.c)((e) => e),
          O = Object(a.b)();
        Object(c.useEffect)(
          () => (m.user.following.find((e) => e._id === t._id) && d(!0), () => d(!1)),
          [m.user.following, t._id]
        );
        return Object(i.jsx)(i.Fragment, {
          children: o
            ? Object(i.jsxs)('div', {
                className: 'd-flex align-items-center',
                style: { columnGap: '1rem' },
                children: [
                  Object(i.jsx)('button', {
                    type: 'button',
                    className: 'btn btn-primary',
                    onClick: () => (
                      O({ type: l.a.ADD_USER, payload: { ...t, text: '', media: [] } }),
                      s.push('/message/'.concat(t._id))
                    ),
                    children: 'Message',
                  }),
                  Object(i.jsx)('button', {
                    className: 'btn btn-outline-primary btn-sm fw-600',
                    type: 'button',
                    onClick: async () => {
                      j || (d(!1), b(!0), await O(Object(r.d)({ users: u.users, user: t, auth: m, socket: h })), b(!1));
                    },
                    children: Object(i.jsxs)('p', {
                      className: 'mb-0 d-flex align-items-end',
                      children: [
                        Object(i.jsx)('span', { className: 'material-icons-outlined me-1', children: 'done' }),
                        'B\u1ecf theo d\xf5i',
                      ],
                    }),
                  }),
                ],
              })
            : Object(i.jsx)('button', {
                className: 'btn btn-primary btn-sm',
                type: 'button',
                onClick: async () => {
                  j || (d(!0), b(!0), await O(Object(r.b)({ users: u.users, user: t, auth: m, socket: h })), b(!1));
                },
                children: Object(i.jsxs)('p', {
                  className: 'mb-0 d-flex align-items-end',
                  children: [
                    Object(i.jsx)('span', { className: 'material-icons-outlined me-1', children: 'add' }),
                    'Theo d\xf5i',
                  ],
                }),
              }),
        });
      }
    },
    23: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return l;
      }),
        s.d(t, 'c', function () {
          return r;
        }),
        s.d(t, 'd', function () {
          return i;
        }),
        s.d(t, 'b', function () {
          return o;
        });
      var c = s(4);
      var a = (e) => {
          let { fullname: t, username: s, email: c, password: a, confirmPassword: n } = e;
          const l = {};
          return (
            t
              ? t.length > 25 && (l.fullName = 'Full name have to <= 25 character.')
              : (l.fullname = 'Please enter full name.'),
            s
              ? s.replace(/ /g, '').length > 25 && (l.userName = 'Username have to <= 25 character.')
              : (l.userName = 'Please enter username.'),
            c
              ? (function (e) {
                  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    e
                  );
                })(c) || (l.email = 'Email incorrect.')
              : (l.email = 'Please enter email.'),
            a
              ? a.length < 6 && (l.password = 'Password have to >= 6 character.')
              : (l.password = 'Please enter password.'),
            a !== n && (l.confirmPassword = 'Password have to match'),
            { errorMsg: l, errorLength: Object.keys(l).length }
          );
        },
        n = s(2);
      const l = (e) => async (t) => {
          try {
            t({ type: n.c.ALERT, payload: { loading: !0 } });
            const s = await Object(c.d)('login', e);
            t({ type: n.c.AUTH, payload: { token: s.data.access_token, user: s.data.user } }),
              localStorage.setItem('firstLogin', !0),
              t({ type: n.c.ALERT, payload: { success: s.data.msg } });
          } catch (s) {
            t({ type: n.c.ALERT, payload: { error: s.response.data.msg } });
          }
        },
        r = () => async (e) => {
          if (localStorage.getItem('firstLogin')) {
            e({ type: n.c.ALERT, payload: { loading: !0 } });
            try {
              const t = await Object(c.d)('refresh_token');
              e({ type: n.c.AUTH, payload: { token: t.data.access_token, user: t.data.user } }),
                e({ type: n.c.ALERT, payload: {} });
            } catch (t) {
              e({ type: n.c.ALERT, payload: { error: t.response.data.msg } });
            }
          }
        },
        i = (e) => async (t) => {
          try {
            const l = a(e);
            if (l.errorLength > 0) return t({ type: n.c.ALERT, payload: l.errorMsg });
            try {
              t({ type: n.c.ALERT, payload: { loading: !0 } });
              const s = await Object(c.d)('register', e);
              t({ type: n.c.AUTH, payload: { token: s.data.access_token, user: s.data.user } }),
                localStorage.setItem('firstLogin', !0),
                t({ type: n.c.ALERT, payload: { success: s.data.msg } });
            } catch (s) {
              t({ type: n.c.ALERT, payload: { error: s.response.data.msg } });
            }
          } catch (s) {
            t({ type: n.c.ALERT, payload: { error: s.response.data.msg } });
          }
        },
        o = () => async (e) => {
          try {
            localStorage.removeItem('firstLogin'), await Object(c.d)('logout'), (window.location.href = '/');
          } catch (t) {
            e({ type: n.c.ALERT, payload: { error: t.response.data.msg } });
          }
        };
    },
    27: function (e, t, s) {
      'use strict';
      s(1);
      var c = s(0);
      t.a = (e) => {
        let { setContent: t, content: s } = e;
        return Object(c.jsxs)('div', {
          className: 'nav-item p-1 dropdown',
          style: { opacity: 1 },
          children: [
            Object(c.jsx)('span', {
              className: 'nav-link d-flex position-relative p-0',
              id: 'navbarDropdown',
              role: 'button',
              'data-bs-toggle': 'dropdown',
              'aria-haspopup': 'true',
              'aria-expanded': 'false',
              children: Object(c.jsx)('span', {
                className: 'material-icons-outlined text-warning pointer',
                children: 'emoji_emotions',
              }),
            }),
            Object(c.jsx)('div', {
              className: 'dropdown-menu',
              'aria-labelledby': 'navbarDropdown',
              children: Object(c.jsx)('div', {
                className: 'reactions',
                children: [
                  '\u2764\ufe0f',
                  '\ud83d\ude06',
                  '\ud83d\ude2f',
                  '\ud83d\ude22',
                  '\ud83d\ude21',
                  '\ud83d\udc4d',
                  '\ud83d\udc4e',
                  '\ud83d\ude04',
                  '\ud83d\ude02',
                  '\ud83d\ude0d',
                  '\ud83d\ude18',
                  '\ud83d\ude17',
                  '\ud83d\ude1a',
                  '\ud83d\ude33',
                  '\ud83d\ude2d',
                  '\ud83d\ude13',
                  '\ud83d\ude24',
                  '\ud83e\udd24',
                  '\ud83d\udc7b',
                  '\ud83d\udc80',
                  '\ud83e\udd10',
                  '\ud83d\ude34',
                  '\ud83d\ude37',
                  '\ud83d\ude35',
                ].map((e) =>
                  Object(c.jsx)(
                    'button',
                    { onClick: () => t(s + e), type: 'button', children: Object(c.jsx)('span', { children: e }) },
                    e
                  )
                ),
              }),
            }),
          ],
        });
      };
    },
    28: function (e, t, s) {
      'use strict';
      var c = s(21),
        a = s.n(c),
        n = s(5),
        l = s(0);
      t.a = function (e) {
        let { posts: t, result: s } = e;
        return 0 === s
          ? Object(l.jsx)('h2', { className: 'text-center', children: 'Kh\xf4ng c\xf3 b\xe0i vi\u1ebft' })
          : Object(l.jsx)('div', {
              className: 'post_thumb',
              children: t.map((e) =>
                Object(l.jsxs)(
                  'div',
                  {
                    className: 'post_thumb_display border rounded-3 shadow mb-5 overflow-hidden bg-white',
                    children: [
                      Object(l.jsx)(n.b, {
                        to: '/post/'.concat(e._id),
                        children: e.images[0].url.match(/video/i)
                          ? Object(l.jsx)('video', {
                              controls: !0,
                              src: e.images[0].url,
                              alt: e.images[0].url,
                              className: 'w-100',
                              children: Object(l.jsx)('track', { kind: 'captions' }),
                            })
                          : Object(l.jsx)('img', {
                              src: e.images[0].url,
                              alt: e.images[0].url,
                              style: { height: 300 },
                              className: 'w-100 img-cover img-fluid',
                            }),
                      }),
                      Object(l.jsxs)('div', {
                        className: 'post_thumb_post',
                        children: [
                          Object(l.jsxs)('div', {
                            className: 'text-dark d-flex',
                            children: [
                              Object(l.jsx)(n.b, {
                                to: '/profile/'.concat(e.user._id),
                                children: Object(l.jsx)('img', {
                                  src: e.user.avatar,
                                  className: 'circle rounded-circle me-2',
                                  alt: 'avatar',
                                }),
                              }),
                              Object(l.jsxs)('div', {
                                children: [
                                  Object(l.jsx)('p', { className: 'fw-600 mb-0', children: e.user.fullname }),
                                  Object(l.jsx)(n.b, {
                                    to: '/post/'.concat(e._id),
                                    children: Object(l.jsx)('small', {
                                      className: 'text-muted hover-underline',
                                      children: a()(e.createdAt).fromNow(),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(l.jsxs)('div', {
                            className: 'd-flex align-items-center text-dark fs-6 mt-3 ps-1',
                            children: [
                              Object(l.jsxs)('div', {
                                className: 'me-3',
                                children: [
                                  Object(l.jsx)('i', { className: 'fas fa-heart text-danger me-2' }),
                                  Object(l.jsx)('strong', { children: e.likes.length }),
                                ],
                              }),
                              Object(l.jsxs)('div', {
                                children: [
                                  Object(l.jsx)('i', { className: 'far fa-comment-dots me-2' }),
                                  Object(l.jsx)('strong', { children: e.comments.length }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e._id
                )
              ),
            });
      };
    },
    29: function (e, t, s) {
      'use strict';
      var c = s(1);
      t.a = (e) => {
        const [t, s] = Object(c.useState)(!1);
        function a() {
          const e = window.innerHeight,
            { scrollTop: c } = document.documentElement,
            { offsetHeight: a } = document.documentElement;
          e + c !== a || t || s(!0);
        }
        return (
          Object(c.useEffect)(
            () => (window.addEventListener('scroll', a), () => window.removeEventListener('scroll', a)),
            []
          ),
          Object(c.useEffect)(() => {
            t &&
              e(() => {
                console.log('called back');
              });
          }, [t]),
          [t, s]
        );
      };
    },
    37: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'SUGGES_TYPES', function () {
          return n;
        }),
        s.d(t, 'getSuggestions', function () {
          return l;
        });
      var c = s(4),
        a = s(2);
      const n = { LOADING: 'LOADING_SUGGES', GET_USERS: 'GET_USERS_SUGGES' },
        l = (e) => async (t) => {
          try {
            t({ type: n.LOADING, payload: !0 });
            const s = await Object(c.b)('suggestionsUser', e);
            t({ type: n.GET_USERS, payload: s.data }), t({ type: n.LOADING, payload: !1 });
          } catch (s) {
            t({ type: a.c.ALERT, payload: { error: s.response.data.msg } });
          }
        };
    },
    38: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'default', function () {
          return d;
        });
      var c = s.p + 'static/media/logo.cc5e3104.png',
        a = s(1),
        n = s(3),
        l = s(10),
        r = s(5),
        i = s(23),
        o = s(0);
      function d() {
        const [e, t] = Object(a.useState)({ email: '', password: '' }),
          { email: s, password: d } = e,
          { auth: j } = Object(n.c)((e) => e),
          [b, m] = Object(a.useState)(!1),
          u = Object(l.useHistory)(),
          h = Object(n.b)();
        Object(a.useEffect)(() => {
          j.token && u.push('/');
        }, [j.token, u]);
        const O = (s) => {
            const { name: c, value: a } = s.target;
            t({ ...e, [c]: a });
          },
          p = b
            ? Object(o.jsx)('span', { className: 'material-icons-outlined', children: 'visibility' })
            : Object(o.jsx)('span', { className: 'material-icons-outlined', children: 'visibility_off' });
        return Object(o.jsxs)('div', {
          className: 'wrap-form',
          children: [
            Object(o.jsx)('p', {
              className: 'text-center mt-4',
              children: Object(o.jsx)('img', { src: c, height: '100', alt: 'logo' }),
            }),
            Object(o.jsx)('div', {
              className: 'rounded-15 shadow-lg overflow-hidden mx-auto',
              style: { width: 600 },
              children: Object(o.jsx)('div', {
                className: 'row',
                children: Object(o.jsx)('div', {
                  className: 'col-md-12',
                  children: Object(o.jsxs)('div', {
                    className: 'bg-white p-5 h-100',
                    children: [
                      Object(o.jsx)('p', { className: 'fs-2 my-5 text-center', children: 'T-Network' }),
                      Object(o.jsxs)('form', {
                        onSubmit: (t) => {
                          t.preventDefault(), h(Object(i.a)(e));
                        },
                        children: [
                          Object(o.jsx)('div', {
                            className: 'mb-3',
                            children: Object(o.jsx)('input', {
                              type: 'email',
                              name: 'email',
                              placeholder: 'Email',
                              className: 'form-control',
                              value: s,
                              onChange: O,
                            }),
                          }),
                          Object(o.jsx)('div', {
                            className: 'mb-3',
                            children: Object(o.jsxs)('div', {
                              className: 'position-relative',
                              children: [
                                Object(o.jsx)('input', {
                                  type: b ? 'text' : 'password',
                                  name: 'password',
                                  className: 'form-control',
                                  placeholder: 'Password',
                                  value: d,
                                  onChange: O,
                                }),
                                Object(o.jsx)('small', {
                                  className: 'position-absolute eye',
                                  onKeyDown: () => m(!b),
                                  onClick: () => m(!b),
                                  role: 'button',
                                  tabIndex: 0,
                                  children: p,
                                }),
                              ],
                            }),
                          }),
                          Object(o.jsxs)('button', {
                            type: 'submit',
                            className: 'btn btn-primary w-100 btn-login',
                            children: [
                              '\u0110\u0103ng nh\u1eadp',
                              Object(o.jsx)('span', { className: 'material-icons-outlined', children: 'east' }),
                            ],
                          }),
                          Object(o.jsx)('p', {
                            className: 'text-center mb-0 mt-3 form-text',
                            children: Object(o.jsxs)('small', {
                              children: [
                                'B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n?',
                                ' ',
                                Object(o.jsx)(r.b, {
                                  to: '/register',
                                  className: 'hover-underline text-primary',
                                  children: '\u0110\u0103ng k\xfd',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
    4: function (e, t, s) {
      'use strict';
      s.d(t, 'b', function () {
        return n;
      }),
        s.d(t, 'd', function () {
          return l;
        }),
        s.d(t, 'c', function () {
          return r;
        }),
        s.d(t, 'a', function () {
          return i;
        });
      var c = s(24),
        a = s.n(c);
      const n = async (e, t) => await a.a.get('/api/'.concat(e), { headers: { Authorization: t } }),
        l = async (e, t, s) => await a.a.post('/api/'.concat(e), t, { headers: { Authorization: s } }),
        r = async (e, t, s) => await a.a.patch('/api/'.concat(e), t, { headers: { Authorization: s } }),
        i = async (e, t) => await a.a.delete('/api/'.concat(e), { headers: { Authorization: t } });
    },
    40: function (e, t, s) {
      'use strict';
      s.r(t);
      var c = s(45),
        a = (s(1), s(0));
      t.default = function () {
        return Object(a.jsxs)('div', {
          className: 'message row',
          children: [
            Object(a.jsx)('div', { className: 'col-md-3 border-end left_mess', children: Object(a.jsx)(c.a, {}) }),
            Object(a.jsx)('div', {
              className: 'col-md-9 right_mess',
              children: Object(a.jsxs)('div', {
                className: 'd-flex justify-content-center align-items-center flex-column h-100',
                children: [
                  Object(a.jsx)('i', {
                    className: 'fab fa-facebook-messenger text-primary',
                    style: { fontSize: '5rem' },
                  }),
                  Object(a.jsx)('h4', { children: 'Messenger' }),
                ],
              }),
            }),
          ],
        });
      };
    },
    42: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'default', function () {
          return o;
        });
      var c = s(1),
        a = s(3),
        n = s(10),
        l = s(5),
        r = s(23),
        i = s(0);
      function o() {
        const { auth: e, alert: t } = Object(a.c)((e) => e),
          s = Object(n.useHistory)(),
          o = Object(a.b)(),
          [d, j] = Object(c.useState)({
            fullname: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: 'male',
          }),
          { fullname: b, username: m, email: u, password: h, confirmPassword: O } = d,
          [p, x] = Object(c.useState)(!1),
          [f, y] = Object(c.useState)(!1);
        Object(c.useEffect)(() => {
          e.token && s.push('/');
        }, [e.token, s]);
        const g = (e) => {
            const { name: t, value: s } = e.target;
            j({ ...d, [t]: s });
          },
          v = p
            ? Object(i.jsx)('span', { className: 'material-icons-outlined', children: 'visibility' })
            : Object(i.jsx)('span', { className: 'material-icons-outlined', children: 'visibility_off' }),
          N = f
            ? Object(i.jsx)('span', { className: 'material-icons-outlined', children: 'visibility' })
            : Object(i.jsx)('span', { className: 'material-icons-outlined', children: 'visibility_off' });
        return Object(i.jsx)('div', {
          className: 'wrap-form',
          children: Object(i.jsx)('div', {
            className: 'rounded-15 shadow-lg overflow-hidden mx-auto',
            style: { width: 600 },
            children: Object(i.jsx)('div', {
              className: 'row',
              children: Object(i.jsx)('div', {
                className: 'col-md-12',
                children: Object(i.jsxs)('div', {
                  className: 'bg-white p-5 h-100',
                  children: [
                    Object(i.jsx)('p', { className: 'fs-2 text-center my-5', children: 'T-Network' }),
                    Object(i.jsxs)('form', {
                      onSubmit: (e) => {
                        e.preventDefault(), o(Object(r.d)(d));
                      },
                      children: [
                        Object(i.jsx)('div', {
                          className: 'mb-3',
                          children: Object(i.jsxs)('label', {
                            htmlFor: 'fullname',
                            className: 'form-label',
                            children: [
                              'H\u1ecd v\xe0 t\xean',
                              Object(i.jsx)('input', {
                                type: 'text',
                                id: 'fullname',
                                name: 'fullname',
                                className: 'form-control',
                                onChange: g,
                                value: b,
                                style: { background: ''.concat(t.fullname ? '#fd2d6a14' : '') },
                              }),
                            ],
                          }),
                        }),
                        Object(i.jsx)('div', {
                          className: 'mb-3',
                          children: Object(i.jsxs)('label', {
                            htmlFor: 'username',
                            className: 'form-label',
                            children: [
                              'T\xe0i kho\u1ea3n',
                              Object(i.jsx)('input', {
                                type: 'text',
                                id: 'username',
                                name: 'username',
                                className: 'form-control',
                                onChange: g,
                                value: m.toLowerCase().replace(/ /g, ''),
                                style: { background: ''.concat(t.username ? '#fd2d6a14' : '', ' ') },
                              }),
                            ],
                          }),
                        }),
                        Object(i.jsx)('div', {
                          className: 'mb-3',
                          children: Object(i.jsxs)('label', {
                            htmlFor: 'exampleInputEmail1',
                            className: 'form-label',
                            children: [
                              '\u0110\u1ecba ch\u1ec9 email',
                              Object(i.jsx)('input', {
                                type: 'email',
                                name: 'email',
                                className: 'form-control',
                                id: 'exampleInputEmail1',
                                value: u,
                                onChange: g,
                              }),
                            ],
                          }),
                        }),
                        Object(i.jsx)('div', {
                          className: 'mb-3',
                          children: Object(i.jsxs)('div', {
                            className: 'position-relative',
                            children: [
                              Object(i.jsxs)('label', {
                                htmlFor: 'password',
                                className: 'form-label',
                                children: [
                                  'M\u1eadt kh\u1ea9u',
                                  Object(i.jsx)('input', {
                                    type: p ? 'text' : 'password',
                                    name: 'password',
                                    className: 'form-control',
                                    id: 'password',
                                    value: h,
                                    onChange: g,
                                  }),
                                ],
                              }),
                              Object(i.jsx)('small', {
                                className: 'position-absolute',
                                style: { bottom: '8px', right: '15px' },
                                onKeyDown: () => x(!p),
                                onClick: () => x(!p),
                                role: 'button',
                                tabIndex: 0,
                                children: v,
                              }),
                            ],
                          }),
                        }),
                        Object(i.jsx)('div', {
                          className: 'mb-3',
                          children: Object(i.jsxs)('div', {
                            className: 'position-relative',
                            children: [
                              Object(i.jsxs)('label', {
                                htmlFor: 'confirmPassword',
                                className: 'form-label',
                                children: [
                                  'Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u',
                                  Object(i.jsx)('input', {
                                    type: f ? 'text' : 'password',
                                    name: 'confirmPassword',
                                    className: 'form-control',
                                    id: 'confirmPassword',
                                    value: O,
                                    onChange: g,
                                  }),
                                ],
                              }),
                              Object(i.jsx)('small', {
                                style: { bottom: '8px', right: '15px' },
                                className: 'position-absolute',
                                onKeyDown: () => y(!f),
                                onClick: () => y(!f),
                                role: 'button',
                                tabIndex: 0,
                                children: N,
                              }),
                            ],
                          }),
                        }),
                        Object(i.jsx)('div', {
                          className: 'form-group my-4',
                          children: Object(i.jsxs)('label', {
                            htmlFor: 'gender',
                            className: 'mb-3 form-label',
                            children: [
                              'Gi\u1edbi t\xednh',
                              Object(i.jsxs)('div', {
                                className: 'd-flex justify-content-between',
                                children: [
                                  Object(i.jsx)('div', {
                                    className: 'form-check',
                                    children: Object(i.jsxs)('label', {
                                      className: 'form-check-label',
                                      htmlFor: 'male',
                                      children: [
                                        'Nam',
                                        Object(i.jsx)('input', {
                                          type: 'radio',
                                          id: 'male',
                                          name: 'gender',
                                          className: 'form-check-input',
                                          value: 'male',
                                          defaultChecked: !0,
                                          onChange: g,
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsx)('div', {
                                    className: 'form-check',
                                    children: Object(i.jsxs)('label', {
                                      className: 'form-check-label',
                                      htmlFor: 'female',
                                      children: [
                                        'N\u1eef',
                                        Object(i.jsx)('input', {
                                          type: 'radio',
                                          id: 'female',
                                          name: 'gender',
                                          value: 'female',
                                          className: 'form-check-input',
                                          onChange: g,
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsx)('div', {
                                    className: 'form-check',
                                    children: Object(i.jsxs)('label', {
                                      className: 'form-check-label',
                                      htmlFor: 'other',
                                      children: [
                                        'Kh\xe1c',
                                        Object(i.jsx)('input', {
                                          type: 'radio',
                                          id: 'other',
                                          name: 'gender',
                                          value: 'other',
                                          className: 'form-check-input',
                                          onChange: g,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(i.jsx)('button', {
                          type: 'submit',
                          className: 'btn btn-primary w-100 me-2',
                          children: '\u0110\u0103ng k\xfd',
                        }),
                        Object(i.jsx)('p', {
                          className: 'text-center mb-0 mt-3 form-text',
                          children: Object(i.jsxs)('small', {
                            children: [
                              'B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n?',
                              ' ',
                              Object(i.jsx)(l.b, {
                                to: '/login',
                                className: 'text-primary w-50',
                                children: '\u0110\u0103ng nh\u1eadp',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    43: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'default', function () {
          return g;
        });
      s(1);
      var c = s(3),
        a = s(5),
        n = s(0);
      var l = function () {
          const { auth: e } = Object(c.c)((e) => e);
          return Object(n.jsx)('div', {
            className: 'rounded-10 shadow-sm p-3 border left-side-bar bg-white',
            children: Object(n.jsxs)('ul', {
              children: [
                Object(n.jsx)('li', {
                  children: Object(n.jsxs)(a.b, {
                    to: '/profile/'.concat(e.user._id),
                    children: [
                      Object(n.jsx)('img', {
                        src: e.user.avatar,
                        className: 'me-2 img-cover rounded-circle circle',
                        alt: 'avatar',
                      }),
                      Object(n.jsx)('span', { className: 'fw-600', children: e.user.username }),
                    ],
                  }),
                }),
                Object(n.jsx)('li', {
                  children: Object(n.jsxs)(a.b, {
                    to: '/message',
                    children: [
                      Object(n.jsx)('i', { className: 'fab fa-facebook-messenger text-primary fs-3 me-2' }),
                      Object(n.jsx)('span', { className: 'fw-600', children: 'Tin nh\u1eafn' }),
                    ],
                  }),
                }),
                Object(n.jsx)('li', {
                  children: Object(n.jsxs)(a.b, {
                    to: '/discover',
                    children: [
                      Object(n.jsx)('i', { className: 'fas fa-globe-americas text-success me-2 fs-3' }),
                      Object(n.jsx)('span', { className: 'fw-600', children: 'Kh\xe1m ph\xe1' }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        r = s(29),
        i = s(6),
        o = s(4),
        d = s(46);
      var j = function () {
          const { homePosts: e, auth: t } = Object(c.c)((e) => e),
            s = Object(c.b)(),
            [a, l] = Object(r.a)(function () {
              setTimeout(() => {
                j();
              }, 1e3);
            }),
            j = async () => {
              l(!0);
              const c = await Object(o.b)('posts?limit='.concat(9 * e.page), t.token);
              s({ type: i.a.GET_POSTS, payload: { ...c.data, page: e.page + 1 } }), l(!1);
            };
          return Object(n.jsxs)('div', {
            className: 'posts my-3',
            children: [
              e.posts.map((e) => Object(n.jsx)(d.a, { post: e }, e._id)),
              a && Object(n.jsx)('div', { className: 'loader' }),
            ],
          });
        },
        b = s(22),
        m = s(17),
        u = s(37);
      var h = function () {
          const { auth: e, suggestions: t } = Object(c.c)((e) => e),
            s = Object(c.b)();
          return Object(n.jsxs)('div', {
            className: 'rounded-10 shadow-sm p-3 border right-side-bar bg-white',
            children: [
              Object(n.jsx)('div', { className: 'user-top', children: Object(n.jsx)(m.a, { user: e.user }) }),
              Object(n.jsxs)('div', {
                className: 'd-flex justify-content-between align-items-center my-2',
                children: [
                  Object(n.jsx)('h5', { className: 'text-danger mb-0', children: 'G\u1ee3i \xfd theo d\xf5i' }),
                  !t.loading &&
                    Object(n.jsx)('button', {
                      type: 'button',
                      onClick: () => s(Object(u.getSuggestions)(e.token)),
                      children: Object(n.jsx)('i', { className: 'fas fa-redo' }),
                    }),
                ],
              }),
              t.loading
                ? Object(n.jsx)('div', { className: 'loader d-block mx-auto my-4' })
                : Object(n.jsx)('div', {
                    className: 'suggestions',
                    children: t.users.map((e) =>
                      Object(n.jsx)(m.a, { user: e, children: Object(n.jsx)(b.a, { user: e }) }, e._id)
                    ),
                  }),
            ],
          });
        },
        O = s(2);
      var p = function () {
          const { auth: e } = Object(c.c)((e) => e),
            t = Object(c.b)();
          return Object(n.jsx)('div', {
            className: 'status',
            children: Object(n.jsxs)('div', {
              className: 'p-3 border rounded-10 shadow-sm bg-white',
              children: [
                Object(n.jsxs)('button', {
                  className: 'btn-edit btn rounded-pill w-100 text-start',
                  type: 'button',
                  onClick: () => t({ type: O.c.STATUS, payload: !0 }),
                  children: [
                    Object(n.jsx)('img', {
                      src: e.user.avatar,
                      className: 'img-fluid circle rounded-circle me-2 img-cover',
                      alt: '',
                    }),
                    'B\u1ea1n \u0111ang ngh\u0129 g\xec?',
                  ],
                }),
                Object(n.jsx)('hr', {}),
                Object(n.jsxs)('div', {
                  className: 'row',
                  children: [
                    Object(n.jsxs)('div', {
                      className: 'col-md-6 col-lg-4 col-sm-6 live pointer left',
                      onClick: () => t({ type: O.c.STATUS, payload: !0 }),
                      children: [
                        Object(n.jsx)('span', {
                          className: 'material-icons-outlined text-danger',
                          children: 'video_camera_front',
                        }),
                        Object(n.jsx)('span', { className: 'ms-1', children: '\u1ea2nh tr\u1ef1c ti\u1ebfp' }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'col-md-6 col-lg-4 col-sm-6 picture-video pointer center',
                      onClick: () => t({ type: O.c.STATUS, payload: !0 }),
                      children: [
                        Object(n.jsx)('span', {
                          className: 'material-icons-outlined text-success',
                          children: 'photo_library',
                        }),
                        Object(n.jsx)('span', { className: 'ms-1', children: '\u1ea2nh/video' }),
                      ],
                    }),
                    Object(n.jsx)('div', {
                      className: 'col-lg-4 activity-emoji d-none d-lg-block pointer right',
                      onClick: () => t({ type: O.c.STATUS, payload: !0 }),
                      children: Object(n.jsxs)('div', {
                        className: 'd-flex h-100 align-items-center justify-content-center',
                        children: [
                          Object(n.jsx)('span', {
                            className: 'material-icons-outlined text-warning',
                            children: 'emoji_emotions',
                          }),
                          Object(n.jsx)('span', { className: 'ms-1', children: 'C\u1ea3m x\xfac' }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        x = s(25),
        f = s.n(x);
      var y = function () {
        return Object(n.jsxs)('div', {
          className: 'rounded-10 p-3 shadow my-4 bg-white',
          children: [
            Object(n.jsxs)('div', {
              className: 'd-flex mb-3',
              children: [
                Object(n.jsx)(f.a, { circle: !0, width: 36, height: 36 }),
                Object(n.jsx)('div', { className: 'w-100 ps-2', children: Object(n.jsx)(f.a, { count: 2 }) }),
              ],
            }),
            Object(n.jsx)(f.a, { className: 'rounded-10', height: 300 }),
            Object(n.jsx)(f.a, { className: 'my-3', width: '100%', height: 30 }),
            Object(n.jsxs)('div', {
              className: 'comment_input d-flex mb-1',
              children: [
                Object(n.jsx)(f.a, { circle: !0, height: 36, width: 36 }),
                Object(n.jsx)('div', {
                  className: 'w-100 px-3',
                  children: Object(n.jsx)(f.a, { className: 'w-100', height: 34 }),
                }),
                Object(n.jsx)(f.a, { height: 34, width: 60 }),
              ],
            }),
          ],
        });
      };
      function g() {
        const { homePosts: e } = Object(c.c)((e) => e);
        return Object(n.jsx)('div', {
          className: 'container-fluid h-auto pt-4',
          children: Object(n.jsxs)('div', {
            className: 'row',
            children: [
              Object(n.jsx)('div', { className: 'col-xl-3 d-none d-xl-block', children: Object(n.jsx)(l, {}) }),
              Object(n.jsxs)('div', {
                className: 'col-md-8 col-lg-8 col-sm-12 col-xl-5',
                children: [
                  Object(n.jsx)(p, {}),
                  e.loading
                    ? Object(n.jsxs)(n.Fragment, {
                        children: [Object(n.jsx)(y, {}), Object(n.jsx)(y, {}), Object(n.jsx)(y, {})],
                      })
                    : 0 === e.result || 0 === e.posts.length
                    ? Object(n.jsx)('h2', {
                        className: 'text-center mt-5',
                        children: 'Kh\xf4ng c\xf3 b\xe0i vi\u1ebft',
                      })
                    : Object(n.jsx)(j, {}),
                ],
              }),
              Object(n.jsx)('div', {
                className: 'col-md-4 col-lg-4 col-xl-4 d-none d-md-block',
                children: Object(n.jsx)(h, {}),
              }),
            ],
          }),
        });
      }
    },
    44: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'DISCOVER_TYPES', function () {
          return n;
        }),
        s.d(t, 'getDiscoverPosts', function () {
          return l;
        });
      var c = s(4),
        a = s(2);
      const n = { LOADING: 'LOADING_DISCOVER', GET_POSTS: 'GET_DISCOVER_POSTS', UPDATE_POST: 'UPDATE_DISCOVER_POST' },
        l = (e) => async (t) => {
          try {
            t({ type: n.LOADING, payload: !0 });
            const s = await Object(c.b)('post_discover', e);
            t({ type: n.GET_POSTS, payload: s.data }), t({ type: n.LOADING, payload: !1 });
          } catch (s) {
            t({ type: a.c.ALERT, payload: { error: s.response.data.msg } });
          }
        };
    },
    45: function (e, t, s) {
      'use strict';
      var c = s(17),
        a = s(1),
        n = s(3),
        l = s(10),
        r = s(5),
        i = s(2),
        o = s(8),
        d = s(4),
        j = s(0);
      t.a = function () {
        const [e, t] = Object(a.useState)(''),
          [s, b] = Object(a.useState)([]),
          { auth: m, message: u, online: h } = Object(n.c)((e) => e),
          O = Object(n.b)(),
          { id: p } = Object(l.useParams)(),
          x = Object(l.useHistory)(),
          f = Object(a.useRef)(),
          [y, g] = Object(a.useState)(0),
          v = (e) => (
            t(''),
            b([]),
            O({ type: o.a.ADD_USER, payload: { ...e, text: '', media: [] } }),
            x.push('/message/'.concat(e._id))
          ),
          N = (e) => (p === e._id ? 'active' : '');
        return (
          Object(a.useEffect)(() => {
            u.firstLoad || O(Object(o.e)({ auth: m }));
          }, [O, m, u.firstLoad]),
          Object(a.useEffect)(() => {
            new IntersectionObserver(
              (e) => {
                e[0].isIntersecting && g((e) => e + 1);
              },
              { threshold: 0.1 }
            ).observe(f.current);
          }, [g]),
          Object(a.useEffect)(() => {
            u.resultUsers >= 9 * (y - 1) && y > 1 && O(Object(o.e)({ auth: m, page: y }));
          }, [u.resultUsers, y, m, O]),
          Object(a.useEffect)(() => {
            u.firstLoad && O({ type: o.a.CHECK_ONLINE_OFFLINE, payload: h });
          }, [h, u.firstLoad, O]),
          Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsx)('form', {
                className: 'message_header d-flex px-2',
                onSubmit: async (t) => {
                  if ((t.preventDefault(), !e)) return b([]);
                  try {
                    const t = await Object(d.b)('search?username='.concat(e), m.token);
                    b(t.data.users);
                  } catch (s) {
                    O({ type: i.c.ALERT, payload: { error: s.response.data.msg } });
                  }
                  return null;
                },
                children: Object(j.jsxs)('div', {
                  className: 'search-input',
                  children: [
                    Object(j.jsx)('input', {
                      type: 'text',
                      placeholder: 'Nh\u1eadp \u0111\u1ec3 t\xecm ki\u1ebfm...',
                      value: e,
                      onChange: (e) => {
                        t(e.target.value);
                      },
                    }),
                    Object(j.jsx)('div', {
                      className: 'icon',
                      children: Object(j.jsx)('button', {
                        type: 'submit',
                        children: Object(j.jsx)('span', { className: 'material-icons', children: 'search' }),
                      }),
                    }),
                  ],
                }),
              }),
              Object(j.jsxs)('div', {
                className: 'message_chat_list',
                children: [
                  0 !== s.length
                    ? Object(j.jsx)(j.Fragment, {
                        children: s.map((e) =>
                          Object(j.jsx)(
                            'div',
                            {
                              className: 'list_user_chat message_user rounded-3 m-2 pointer '.concat(N(e)),
                              children: Object(j.jsx)(r.b, {
                                to: '/message/'.concat(e._id),
                                className: 'w-100',
                                onClick: () => v(e),
                                children: Object(j.jsx)(c.a, { user: e }),
                              }),
                            },
                            e._id
                          )
                        ),
                      })
                    : Object(j.jsx)(j.Fragment, {
                        children: u.users.map((e) =>
                          Object(j.jsx)(
                            'div',
                            {
                              className: 'list_user_chat message_user rounded-3 m-2 pointer '.concat(N(e)),
                              children: Object(j.jsx)(r.b, {
                                to: '/message/'.concat(e._id),
                                className: 'w-100',
                                onClick: () => v(e),
                                children: Object(j.jsx)(c.a, {
                                  user: e,
                                  msg: !0,
                                  children: e.online
                                    ? Object(j.jsx)('i', { className: 'fas fa-circle text-success' })
                                    : m.user.following.find((t) => t._id === e._id) &&
                                      Object(j.jsx)('i', { className: 'fas fa-circle' }),
                                }),
                              }),
                            },
                            e._id
                          )
                        ),
                      }),
                  Object(j.jsx)('button', { type: 'button', ref: f, style: { opacity: 0 }, children: 'Load more' }),
                ],
              }),
            ],
          })
        );
      };
    },
    46: function (e, t, s) {
      'use strict';
      var c = s(1),
        a = s(0);
      var n = function (e) {
        let { isLike: t, handleLike: s, handleUnLike: c } = e;
        return Object(a.jsx)(a.Fragment, {
          children: t
            ? Object(a.jsx)('button', {
                onClick: c,
                type: 'button',
                children: Object(a.jsx)('small', {
                  className: 'me-3 fw-bold reply pointer text-danger',
                  children: 'Th\xedch',
                }),
              })
            : Object(a.jsx)('button', {
                onClick: s,
                type: 'button',
                children: Object(a.jsx)('small', {
                  className: 'me-3 fw-bold reply pointer text-secondary',
                  children: 'Th\xedch',
                }),
              }),
        });
      };
      var l = function () {
          return Object(a.jsx)('div', { children: Object(a.jsx)('i', { className: 'fas fa-heart text-danger' }) });
        },
        r = s(21),
        i = s.n(r),
        o = s(3),
        d = s(5),
        j = s(30),
        b = s(4),
        m = s(2),
        u = s(9),
        h = s(6);
      var O = s(27);
      var p = function (e) {
        const { post: t, children: s, onReply: n, setOnReply: l } = e,
          [r, i] = Object(c.useState)(''),
          { auth: d, socket: p } = Object(o.c)((e) => e),
          x = Object(o.b)(),
          f = (e) => {
            if ((e.preventDefault(), !r.trim())) return n ? l(!1) : null;
            i('');
            const s = {
              content: r,
              likes: [],
              user: d.user,
              createdAt: new Date().toISOString(),
              reply: n && n.commentId,
              tag: n && n.user,
            };
            return (
              x(
                ((e) => async (t) => {
                  const { post: s, newComment: c, auth: a, socket: n } = e,
                    l = { ...s, comments: [...s.comments, c] };
                  t({ type: h.a.UPDATE_POST, payload: l });
                  try {
                    const e = { ...c, postId: s._id, postUserId: s.user._id },
                      l = await Object(b.d)('comment', e, a.token),
                      r = { ...l.data.newComment, user: a.user },
                      i = { ...s, comments: [...s.comments, r] };
                    t({ type: h.a.UPDATE_POST, payload: i }), n.emit('createComment', i);
                    const o = {
                      id: l.data.newComment._id,
                      text: c.reply
                        ? '\u0111\xe3 nh\u1eafc b\u1ea1n trong b\xecnh lu\u1eadn'
                        : '\u0111\xe3 b\xecnh lu\u1eadn b\xe0i vi\u1ebft c\u1ee7a b\u1ea1n',
                      recipients: c.reply ? [c.tag._id] : [s.user._id],
                      url: '/post/'.concat(s._id),
                      content: s.content,
                      image: s.images[0].url,
                    };
                    t(Object(u.b)({ msg: o, auth: a, socket: n }));
                  } catch (r) {
                    t({ type: m.c.ALERT, payload: { error: r.response.data.msg } });
                  }
                })({ post: t, newComment: s, auth: d, socket: p })
              ),
              n ? l(!1) : null
            );
          };
        return Object(a.jsxs)('form', {
          className: 'comment_input d-flex mb-1',
          onSubmit: f,
          children: [
            s,
            Object(a.jsx)('div', {
              children: Object(a.jsx)('img', {
                src: d.user.avatar,
                className: 'rounded-circle circle img-cover',
                alt: 'avatar',
              }),
            }),
            Object(a.jsxs)('div', {
              className: 'd-flex w-100 ps-3 pe-1',
              children: [
                Object(a.jsx)(j.a, {
                  placeholder: 'Nh\u1eadp b\xecnh lu\u1eadn',
                  value: r,
                  onChange: (e) => i(e.target.value),
                  onKeyPress: (e) => {
                    'Enter' === e.key && f(e);
                  },
                }),
                Object(a.jsx)(O.a, { setContent: i, content: r }),
              ],
            }),
            Object(a.jsx)('button', {
              type: 'submit',
              className: 'btn btn-primary fw-500',
              style: { height: '34px' },
              children: 'G\u1eedi',
            }),
          ],
        });
      };
      var x = function (e) {
        let { post: t, comment: s, setOnEdit: c } = e;
        const { auth: n, socket: l } = Object(o.c)((e) => e),
          r = Object(o.b)(),
          i = () => {
            var e;
            (t.user._id !== n.user._id && s.user._id !== n.user._id) ||
              r(
                ((e = { post: t, auth: n, comment: s, socket: l }),
                async (t) => {
                  const { comment: s, auth: c, post: a, socket: n } = e,
                    l = [...a.comments.filter((e) => e.reply === s._id), s],
                    r = { ...a, comments: a.comments.filter((e) => !l.find((t) => e._id === t._id)) };
                  t({ type: h.a.UPDATE_POST, payload: r }), n.emit('deleteComment', r);
                  try {
                    l.forEach((e) => {
                      Object(b.a)('comment/'.concat(e._id), c.token);
                      const l = {
                        id: e._id,
                        text: s.reply
                          ? '\u0111\xe3 nh\u1eafc b\u1ea1n trong b\xecnh lu\u1eadn'
                          : '\u0111\xe3 b\xecnh lu\u1eadn b\xe0i vi\u1ebft c\u1ee7a b\u1ea1n',
                        recipients: s.reply ? [s.tag._id] : [a.user._id],
                        url: '/post/'.concat(a._id),
                      };
                      t(Object(u.f)({ msg: l, auth: c, socket: n }));
                    });
                  } catch (i) {
                    t({ type: m.c.ALERT, payload: { error: i.response.data.msg } });
                  }
                })
              );
          },
          d = () =>
            Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)('div', {
                  className: 'dropdown-item px-2 rounded-3 fw-600',
                  style: { color: '#333333' },
                  children: Object(a.jsxs)('button', {
                    type: 'button',
                    className: 'd-flex align-items-center',
                    onClick: () => c(!0),
                    children: [
                      Object(a.jsx)('span', { className: 'material-icons-outlined me-2', children: 'create' }),
                      Object(a.jsx)('span', { className: 'mt-2', children: 'Ch\u1ec9nh s\u1eeda' }),
                    ],
                  }),
                }),
                Object(a.jsx)('div', {
                  className: 'dropdown-item px-2 rounded-3 fw-600',
                  children: Object(a.jsxs)('button', {
                    type: 'button',
                    className: 'd-flex align-items-center',
                    onClick: i,
                    children: [
                      Object(a.jsx)('span', { className: 'material-icons-outlined me-2', children: 'delete' }),
                      Object(a.jsx)('span', { className: 'mt-2', children: 'Xo\xe1' }),
                    ],
                  }),
                }),
              ],
            });
        return Object(a.jsx)('div', {
          className: 'menu d-flex align-items-center ms-5',
          children:
            (t.user._id === n.user._id || s.user._id === n.user._id) &&
            Object(a.jsx)('div', {
              className:
                'pointer btn-edit btn rounded-circle circle-sm d-flex justify-content-center align-items-center',
              style: { lineHeight: '0px' },
              children: Object(a.jsxs)('div', {
                className: 'nav-item dropdown',
                children: [
                  Object(a.jsx)('span', {
                    className: 'material-icons-outlined fs-5',
                    id: 'moreLink',
                    'data-bs-toggle': 'dropdown',
                    children: 'more_horiz',
                  }),
                  Object(a.jsx)('div', {
                    className: 'dropdown-menu fs-16 p-2 shadow border',
                    'aria-labelledby': 'moreLink',
                    children:
                      t.user._id === n.user._id
                        ? s.user._id === n.user._id
                          ? d()
                          : Object(a.jsx)('div', {
                              className: 'dropdown-item px-2 rounded-3 fw-600',
                              children: Object(a.jsxs)('button', {
                                type: 'button',
                                className: 'd-flex align-items-center',
                                onClick: i,
                                children: [
                                  Object(a.jsx)('span', {
                                    className: 'material-icons-outlined me-2',
                                    children: 'delete',
                                  }),
                                  Object(a.jsx)('span', { className: 'mt-2', children: 'Xo\xe1' }),
                                ],
                              }),
                            })
                        : s.user._id === n.user._id && d(),
                  }),
                ],
              }),
            }),
        });
      };
      var f = function (e) {
        let { comment: t, post: s, commentId: r, children: u } = e;
        const [O, f] = Object(c.useState)(''),
          [y, g] = Object(c.useState)(!1),
          [v, N] = Object(c.useState)(!1),
          [_, w] = Object(c.useState)(!1),
          [E, T] = Object(c.useState)(!1),
          [k, S] = Object(c.useState)(!1),
          { auth: L, socket: A } = Object(o.c)((e) => e),
          C = Object(o.b)();
        Object(c.useEffect)(() => {
          f(t.content), N(!1), S(!1), t.likes.find((e) => e._id === L.user._id) && N(!0);
        }, [t, L.user._id]);
        const P = { opacity: t._id ? 1 : 0.5, pointerEvents: t._id ? 'inherit' : 'none' },
          D = { width: '100%' },
          R = { width: 'auto' };
        return Object(a.jsx)(a.Fragment, {
          children: Object(a.jsxs)('div', {
            className: 'comment_card d-flex',
            style: P,
            children: [
              Object(a.jsx)(d.b, {
                to: '/profile/'.concat(t.user._id),
                children: Object(a.jsx)('img', {
                  src: t.user.avatar,
                  className: 'img-cover rounded-circle circle',
                  alt: 'avatar',
                }),
              }),
              Object(a.jsxs)('div', {
                className: 'comment_content ms-3 w-100',
                children: [
                  Object(a.jsx)('div', {
                    className: 'd-flex mb-1',
                    children: Object(a.jsxs)('div', {
                      style: _ ? D : R,
                      children: [
                        Object(a.jsxs)('div', {
                          className: 'mb-1 d-flex',
                          children: [
                            Object(a.jsxs)('div', {
                              className: 'top p-3',
                              style: _ ? D : R,
                              children: [
                                Object(a.jsx)(d.b, {
                                  to: '/profile/'.concat(t.user._id),
                                  className: 'text-dark hover-underline',
                                  children: Object(a.jsx)('h6', { children: t.user.username }),
                                }),
                                Object(a.jsx)('div', {
                                  className: 'flex-fill text-wrap',
                                  children: _
                                    ? Object(a.jsx)(j.a, {
                                        value: O,
                                        onChange: (e) => f(e.target.value),
                                        autoFocus: !0,
                                      })
                                    : Object(a.jsxs)(a.Fragment, {
                                        children: [
                                          t.tag &&
                                            t.tag._id !== t.user._id &&
                                            Object(a.jsxs)(d.b, {
                                              to: 'profile/'.concat(t.tag._id),
                                              className: 'me-1',
                                              children: ['@', t.tag.username],
                                            }),
                                          Object(a.jsx)('span', {
                                            children:
                                              O.length < 100
                                                ? O
                                                : y
                                                ? ''.concat(O, ' ')
                                                : ''.concat(O.slice(0, 100), '... '),
                                          }),
                                          O.length > 100 &&
                                            Object(a.jsx)('button', {
                                              type: 'button',
                                              className: 'text-primary pointer hover-underline',
                                              onClick: () => g(!y),
                                              children: y ? '\u1ea8n \u0111i' : 'Xem th\xeam',
                                            }),
                                        ],
                                      }),
                                }),
                                t.likes.length > 0 &&
                                  Object(a.jsxs)('div', {
                                    className: 'react d-flex bg-white rounded-pill shadow px-1',
                                    children: [
                                      Object(a.jsx)(l, {}),
                                      Object(a.jsx)('strong', { className: 'mx-2', children: t.likes.length }),
                                    ],
                                  }),
                              ],
                            }),
                            Object(a.jsx)(x, { post: s, comment: t, setOnEdit: w }),
                          ],
                        }),
                        Object(a.jsxs)('div', {
                          className: 'd-flex',
                          children: [
                            _
                              ? Object(a.jsxs)(a.Fragment, {
                                  children: [
                                    Object(a.jsx)('button', {
                                      onClick: () => {
                                        var e;
                                        t.content !== O
                                          ? (C(
                                              ((e = { comment: t, post: s, content: O, auth: L }),
                                              async (t) => {
                                                const { content: s, post: c, auth: a, comment: n } = e,
                                                  l = Object(m.b)(c.comments, n._id, { ...n, content: s }),
                                                  r = { ...c, comments: l };
                                                t({ type: h.a.UPDATE_POST, payload: r });
                                                try {
                                                  await Object(b.c)('comment/'.concat(n._id), { content: s }, a.token);
                                                } catch (i) {
                                                  t({ type: m.c.ALERT, payload: { error: i.response.data.msg } });
                                                }
                                              })
                                            ),
                                            w(!1))
                                          : w(!1);
                                      },
                                      type: 'button',
                                      children: Object(a.jsx)('small', {
                                        className: 'me-3 fw-bold text-secondary reply',
                                        children: 'C\u1eadp nh\u1eadt',
                                      }),
                                    }),
                                    Object(a.jsx)('button', {
                                      onClick: () => w(!1),
                                      type: 'button',
                                      children: Object(a.jsx)('small', {
                                        className: 'me-3 fw-bold text-secondary reply',
                                        children: 'Hu\u1ef7 b\u1ecf',
                                      }),
                                    }),
                                  ],
                                })
                              : Object(a.jsxs)(a.Fragment, {
                                  children: [
                                    Object(a.jsx)(n, {
                                      isLike: v,
                                      handleLike: async () => {
                                        var e;
                                        E ||
                                          (N(!0),
                                          T(!0),
                                          await C(
                                            ((e = { comment: t, post: s, auth: L, socket: A }),
                                            async (t) => {
                                              const { comment: s, post: c, auth: a, socket: n } = e,
                                                l = { ...s, likes: [...s.likes, a.user] },
                                                r = Object(m.b)(c.comments, s._id, l),
                                                i = { ...c, comments: r };
                                              t({ type: h.a.UPDATE_POST, payload: i }), n.emit('likeComment', i);
                                              try {
                                                await Object(b.c)('comment/'.concat(s._id, '/like'), null, a.token);
                                              } catch (o) {
                                                t({ type: m.c.ALERT, payload: { error: o.response.data.msg } });
                                              }
                                            })
                                          ),
                                          T(!1));
                                      },
                                      handleUnLike: async () => {
                                        var e;
                                        E ||
                                          (N(!1),
                                          T(!0),
                                          await C(
                                            ((e = { comment: t, post: s, auth: L, socket: A }),
                                            async (t) => {
                                              const { comment: s, post: c, auth: a, socket: n } = e,
                                                l = { ...s, likes: Object(m.a)(s.likes, a.user._id) },
                                                r = Object(m.b)(c.comments, s._id, l),
                                                i = { ...c, comments: r };
                                              t({ type: h.a.UPDATE_POST, payload: i }), n.emit('unLikeComment', i);
                                              try {
                                                await Object(b.c)('comment/'.concat(s._id, '/unlike'), null, a.token);
                                              } catch (o) {
                                                t({ type: m.c.ALERT, payload: { error: o.response.data.msg } });
                                              }
                                            })
                                          ),
                                          T(!1));
                                      },
                                    }),
                                    Object(a.jsx)('button', {
                                      onClick: () => (k ? S(!1) : (S({ ...t, commentId: r }), null)),
                                      type: 'button',
                                      children: Object(a.jsx)('small', {
                                        className: 'me-3 fw-bold text-secondary reply',
                                        children: k ? 'Hu\u1ef7 b\u1ecf' : 'Ph\u1ea3n h\u1ed3i',
                                      }),
                                    }),
                                  ],
                                }),
                            Object(a.jsx)('small', {
                              className: 'text-secondary pointer',
                              children: i()(t.createdAt).fromNow(),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  u,
                  k &&
                    Object(a.jsxs)('div', {
                      className: 'mt-3',
                      children: [
                        Object(a.jsx)(p, { post: s, onReply: k, setOnReply: S }),
                        Object(a.jsxs)('small', {
                          className: 'fw-bold text-muted',
                          children: [
                            'Ph\u1ea3n h\u1ed3i:',
                            ' ',
                            Object(a.jsxs)(d.b, {
                              to: 'profile/'.concat(k.user._id),
                              className: 'me-3 fs-14',
                              children: ['@', k.user.fullname, ':'],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      };
      var y = function (e) {
        let { comment: t, post: s, replyCmt: n } = e;
        const [l, r] = Object(c.useState)([]),
          [i, o] = Object(c.useState)(1);
        return (
          Object(c.useEffect)(() => {
            r(n.slice(n.length - i));
          }, [n, i]),
          Object(a.jsx)(a.Fragment, {
            children: Object(a.jsx)('div', {
              className: 'comment_display',
              children: Object(a.jsx)(f, {
                comment: t,
                post: s,
                commentId: t._id,
                children: Object(a.jsxs)('div', {
                  className: 'mt-3',
                  children: [
                    n.length - i > 0
                      ? Object(a.jsx)('button', {
                          type: 'button',
                          className: 'text-secondary mb-3',
                          onClick: () => o(i + 10),
                          children: Object(a.jsx)('span', {
                            className: 'fw-600',
                            children: 'Xem th\xeam b\xecnh lu\u1eadn...',
                          }),
                        })
                      : n.length > 2 &&
                        Object(a.jsx)('button', {
                          type: 'button',
                          className: 'text-secondary mb-3',
                          onClick: () => o(2),
                          children: Object(a.jsx)('span', {
                            className: 'fw-600',
                            children: '\u1ea8n b\xecnh lu\u1eadn',
                          }),
                        }),
                    l.map((e) => e.reply && Object(a.jsx)(f, { comment: e, post: s, commentId: t._id }, e._id)),
                  ],
                }),
              }),
            }),
          })
        );
      };
      var g = function (e) {
        let { post: t } = e;
        const [s, n] = Object(c.useState)([]),
          [l, r] = Object(c.useState)([]),
          [i, o] = Object(c.useState)(2),
          [d, j] = Object(c.useState)([]);
        return (
          Object(c.useEffect)(() => {
            const e = t.comments.filter((e) => !e.reply);
            n(e), r(e.slice(e.length - i));
          }, [t.comments, i]),
          Object(c.useEffect)(() => {
            const e = t.comments.filter((e) => e.reply);
            j(e);
          }, [t.comments]),
          Object(a.jsxs)('div', {
            className: 'comments',
            children: [
              s.length - i > 0
                ? Object(a.jsx)('button', {
                    type: 'button',
                    className: 'text-secondary hover-underline mb-3',
                    onClick: () => o(i + 10),
                    children: Object(a.jsx)('span', {
                      className: 'fw-600',
                      children: 'Xem th\xeam b\xecnh lu\u1eadn...',
                    }),
                  })
                : s.length > 2 &&
                  Object(a.jsx)('button', {
                    type: 'button',
                    className: 'text-secondary hover-underline mb-3',
                    onClick: () => o(2),
                    children: Object(a.jsx)('span', { className: 'fw-600', children: '\u1ea8n b\xecnh lu\u1eadn' }),
                  }),
              l.map((e) =>
                Object(a.jsx)(y, { comment: e, post: t, replyCmt: d.filter((t) => t.reply === e._id) }, e._id)
              ),
            ],
          })
        );
      };
      var v = function (e) {
        let { images: t, id: s } = e;
        const c = (e) => (0 === e ? 'active' : null);
        return Object(a.jsxs)('div', {
          id: 'image'.concat(s),
          className: 'carousel slide',
          'data-bs-ride': 'carousel',
          children: [
            Object(a.jsx)('ol', {
              className: 'carousel-indicators',
              style: { zIndex: 1 },
              children: t.map((e, t) =>
                Object(a.jsx)('li', { 'data-bs-target': '#image'.concat(s), 'data-bs-slide-to': t, className: c(t) }, t)
              ),
            }),
            Object(a.jsx)('div', {
              className: 'carousel-inner',
              children: t.map((e, t) =>
                Object(a.jsx)(
                  'div',
                  {
                    className: 'carousel-item '.concat(c(t)),
                    children: e.url.match(/video/i)
                      ? Object(a.jsx)('video', {
                          controls: !0,
                          src: e.url,
                          className: 'd-block w-100 rounded-3',
                          children: Object(a.jsx)('track', { kind: 'captions' }),
                        })
                      : Object(a.jsx)('img', { src: e.url, className: 'd-block w-100 rounded-3', alt: e.url }),
                  },
                  t
                )
              ),
            }),
            t.length > 1 &&
              Object(a.jsxs)(a.Fragment, {
                children: [
                  Object(a.jsxs)('a', {
                    className: 'carousel-control-prev',
                    href: '#image'.concat(s),
                    role: 'button',
                    'data-bs-slide': 'prev',
                    style: { width: '5%' },
                    children: [
                      Object(a.jsx)('span', { className: 'carousel-control-prev-icon', 'aria-hidden': 'true' }),
                      Object(a.jsx)('span', { className: 'sr-only', children: 'Previous' }),
                    ],
                  }),
                  Object(a.jsxs)('a', {
                    className: 'carousel-control-next',
                    href: '#image'.concat(s),
                    role: 'button',
                    'data-bs-slide': 'next',
                    style: { width: '5%' },
                    children: [
                      Object(a.jsx)('span', { className: 'carousel-control-next-icon', 'aria-hidden': 'true' }),
                      Object(a.jsx)('span', { className: 'sr-only', children: 'Next' }),
                    ],
                  }),
                ],
              }),
          ],
        });
      };
      var N = function (e) {
        let { post: t } = e;
        const [s, n] = Object(c.useState)(!1);
        return Object(a.jsxs)('div', {
          className: 'card_body mb-3',
          children: [
            Object(a.jsxs)('div', {
              className: 'card_body-content mb-3',
              children: [
                Object(a.jsx)('span', {
                  children:
                    t.content.length < 60
                      ? t.content
                      : s
                      ? ''.concat(t.content, ' ')
                      : ''.concat(t.content.slice(0, 60), '...'),
                }),
                t.content.length > 60 &&
                  Object(a.jsx)('button', {
                    type: 'button',
                    onClick: () => n(!0),
                    children: Object(a.jsx)('strong', {
                      className: 'readMore text-primary fw-500 hover-underline pointer',
                      children: s ? '' : 'Xem th\xeam',
                    }),
                  }),
              ],
            }),
            t.images.length > 0 && Object(a.jsx)(v, { images: t.images, id: t._id }),
          ],
        });
      };
      var _ = function (e) {
          let { isLike: t, handleLike: s, handleUnLike: c } = e;
          return Object(a.jsx)(a.Fragment, {
            children: t
              ? Object(a.jsx)('button', {
                  type: 'button',
                  onClick: c,
                  children: Object(a.jsx)('i', { className: 'fas fa-heart text-danger me-2' }),
                })
              : Object(a.jsx)('button', {
                  type: 'button',
                  onClick: s,
                  children: Object(a.jsx)('i', { className: 'far fa-heart me-2' }),
                }),
          });
        },
        w = s(146),
        E = s(147);
      var T = function (e) {
        let { url: t } = e;
        return Object(a.jsx)('div', {
          className: 'p-2',
          children: Object(a.jsxs)(w.a, {
            url: t,
            children: [
              Object(a.jsx)(E.a, { round: !0, size: 24 }),
              Object(a.jsx)('span', { className: 'ms-2', children: 'Facebook' }),
            ],
          }),
        });
      };
      const k = 'https://to2k-network.herokuapp.com/';
      var S = function (e) {
          let { post: t } = e;
          const [s, n] = Object(c.useState)(!1),
            [l, r] = Object(c.useState)(!1),
            [i, j] = Object(c.useState)(!1),
            { auth: b, socket: m } = Object(o.c)((e) => e),
            u = Object(o.b)(),
            [O, p] = Object(c.useState)(!1),
            [x, f] = Object(c.useState)(!1);
          return (
            Object(c.useEffect)(() => {
              t.likes.find((e) => e._id === b.user._id) ? n(!0) : n(!1);
            }, [t.likes, b.user._id]),
            Object(c.useEffect)(() => {
              b.user.saved.find((e) => e === t._id) ? p(!0) : p(!1);
            }, [b.user.saved, t._id]),
            Object(a.jsx)('div', {
              className: 'card_footer',
              children: Object(a.jsxs)('div', {
                className:
                  'card_icon_menu fs-20 align-items-center d-flex justify-content-between pb-3 border-bottom mb-3',
                children: [
                  Object(a.jsxs)('div', {
                    className: 'd-flex align-items-center',
                    children: [
                      Object(a.jsxs)('div', {
                        className: 'd-flex align-items-center me-5 pointer',
                        children: [
                          Object(a.jsx)(_, {
                            isLike: s,
                            handleLike: async () => {
                              l || (r(!0), await u(Object(h.f)({ auth: b, post: t, socket: m })), r(!1));
                            },
                            handleUnLike: async () => {
                              l || (r(!0), await u(Object(h.h)({ auth: b, post: t, socket: m })), r(!1));
                            },
                          }),
                          Object(a.jsx)('strong', { children: t.likes.length }),
                        ],
                      }),
                      Object(a.jsxs)(d.b, {
                        to: '/post/'.concat(t._id),
                        className: 'text-dark me-5 d-flex align-items-center pointer',
                        children: [
                          Object(a.jsx)('i', { className: 'far fa-comment-dots me-2' }),
                          Object(a.jsx)('strong', { className: 'text-dark', children: t.comments.length }),
                        ],
                      }),
                      Object(a.jsxs)('div', {
                        className: 'dropdown pointer',
                        children: [
                          Object(a.jsx)('button', {
                            type: 'button',
                            onClick: () => j(!i),
                            'data-bs-toggle': 'dropdown',
                            id: 'dropdownMenuButton1',
                            children: Object(a.jsx)('i', { className: 'far fa-share-square' }),
                          }),
                          Object(a.jsx)('ul', {
                            className: 'dropdown-menu shadow rounded-10 border-0 px-2',
                            'aria-labelledby': 'dropdownMenuButton1',
                            children: Object(a.jsx)('li', {
                              className: 'rounded-3',
                              children: i && Object(a.jsx)(T, { url: ''.concat(k, '/post/').concat(t._id) }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  O
                    ? Object(a.jsx)('button', {
                        type: 'button',
                        onClick: async () => {
                          x || (f(!0), u(Object(h.i)({ post: t, auth: b })), f(!1));
                        },
                        children: Object(a.jsx)('i', { className: 'fas fa-bookmark me-0 text-danger' }),
                      })
                    : Object(a.jsx)('button', {
                        type: 'button',
                        onClick: async () => {
                          x || (f(!0), u(Object(h.g)({ post: t, auth: b })), f(!1));
                        },
                        children: Object(a.jsx)('i', { className: 'far fa-bookmark me-0' }),
                      }),
                ],
              }),
            })
          );
        },
        L = s(10);
      var A = function (e) {
        let { post: t } = e;
        const { auth: s, socket: c } = Object(o.c)((e) => e),
          n = Object(o.b)(),
          l = Object(L.useHistory)();
        return Object(a.jsxs)('div', {
          className: 'card_header d-flex mb-3',
          children: [
            Object(a.jsx)(d.b, {
              to: '/profile/'.concat(t.user._id),
              className: 'text-dark',
              children: Object(a.jsx)('img', {
                src: t.user.avatar,
                className: 'rounded-circle circle img-cover',
                alt: 'avatar',
              }),
            }),
            Object(a.jsxs)('div', {
              className: 'd-flex align-items-center justify-content-between w-100 ps-2',
              children: [
                Object(a.jsxs)('div', {
                  className: 'card_name',
                  children: [
                    Object(a.jsx)('h6', {
                      className: 'm-0',
                      children: Object(a.jsx)(d.b, {
                        to: '/profile/'.concat(t.user._id),
                        className: 'text-dark',
                        children: t.user.username,
                      }),
                    }),
                    Object(a.jsx)(d.b, {
                      to: '/post/'.concat(t._id),
                      children: Object(a.jsx)('small', {
                        className: 'text-muted hover-underline',
                        children: i()(t.createdAt).fromNow(),
                      }),
                    }),
                  ],
                }),
                Object(a.jsxs)('div', {
                  className: 'nav-item dropdown',
                  children: [
                    Object(a.jsx)('div', {
                      className: 'pointer btn-edit rounded-circle circle-sm text-center',
                      style: { lineHeight: '27px' },
                      id: 'moreLink',
                      'data-bs-toggle': 'dropdown',
                      children: Object(a.jsx)('span', {
                        className: 'material-icons-outlined fs-6',
                        children: 'more_horiz',
                      }),
                    }),
                    Object(a.jsxs)('div', {
                      className: 'dropdown-menu shadow rounded-3 border-0 px-2',
                      'aria-labelledby': 'moreLink',
                      children: [
                        s.user._id === t.user._id &&
                          Object(a.jsxs)(a.Fragment, {
                            children: [
                              Object(a.jsxs)('button', {
                                type: 'button',
                                className: 'dropdown-item p-2 rounded-3 d-flex my-1 pointer',
                                onClick: () => {
                                  n({ type: m.c.STATUS, payload: { ...t, onEdit: !0 } });
                                },
                                children: [
                                  Object(a.jsx)('span', {
                                    className: 'material-icons-outlined me-2',
                                    children: 'create',
                                  }),
                                  Object(a.jsx)('span', {
                                    className: 'fw-500',
                                    children: 'Ch\u1ec9nh s\u1eeda b\xe0i vi\u1ebft',
                                  }),
                                ],
                              }),
                              Object(a.jsxs)('button', {
                                type: 'button',
                                className: 'dropdown-item p-2 rounded-3 d-flex my-1 pointer',
                                onClick: () =>
                                  window.confirm('B\u1ea1n c\xf3 mu\u1ed1n xo\xe1?')
                                    ? (n(Object(h.c)({ post: t, auth: s, socket: c })), l.push('/'))
                                    : null,
                                children: [
                                  Object(a.jsx)('span', {
                                    className: 'material-icons-outlined me-2',
                                    children: 'delete_outline',
                                  }),
                                  Object(a.jsx)('span', { className: 'fw-500', children: 'Xo\xe1 b\xe0i vi\u1ebft' }),
                                ],
                              }),
                            ],
                          }),
                        Object(a.jsx)('hr', { className: 'dropdown-divider' }),
                        Object(a.jsxs)('button', {
                          type: 'button',
                          className: 'dropdown-item p-2 d-flex pointer',
                          onClick: () => {
                            navigator.clipboard.writeText(''.concat(k, '/post/').concat(t._id));
                          },
                          children: [
                            Object(a.jsx)('span', {
                              className: 'material-icons-outlined me-2 fs-5',
                              children: 'content_copy',
                            }),
                            Object(a.jsx)('span', { className: 'fw-500', children: 'Sao ch\xe9p li\xean k\u1ebft' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      t.a = function (e) {
        let { post: t } = e;
        return Object(a.jsxs)('div', {
          className: 'border shadow-sm p-3 mb-5 rounded-10 bg-white',
          children: [
            Object(a.jsx)(A, { post: t }),
            Object(a.jsx)(N, { post: t }),
            Object(a.jsx)(S, { post: t }),
            Object(a.jsx)(g, { post: t }),
            Object(a.jsx)(p, { post: t }),
          ],
        });
      };
    },
    6: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return r;
      }),
        s.d(t, 'b', function () {
          return i;
        }),
        s.d(t, 'e', function () {
          return o;
        }),
        s.d(t, 'j', function () {
          return d;
        }),
        s.d(t, 'f', function () {
          return j;
        }),
        s.d(t, 'h', function () {
          return b;
        }),
        s.d(t, 'd', function () {
          return m;
        }),
        s.d(t, 'c', function () {
          return u;
        }),
        s.d(t, 'g', function () {
          return h;
        }),
        s.d(t, 'i', function () {
          return O;
        });
      var c = s(4),
        a = s(20),
        n = s(2),
        l = s(9);
      const r = {
          CREATE_POST: 'CREATE_POST',
          LOADING_POST: 'LOADING_POST',
          GET_POSTS: 'GET_POSTS',
          UPDATE_POST: 'UPDATE_POST',
          GET_POST: 'GET_POST',
          DELETE_POST: 'DELETE_POST',
        },
        i = (e) => async (t) => {
          const { content: s, images: i, auth: o, socket: d } = e;
          let j = [];
          try {
            t({ type: n.c.ALERT, payload: { loading: !0 } }), i.length > 0 && (j = await Object(a.b)(i));
            const e = await Object(c.d)('posts', { content: s, images: j }, o.token);
            t({ type: r.CREATE_POST, payload: { ...e.data.newPost, user: o.user } }),
              t({ type: n.c.ALERT, payload: { loading: !1 } });
            const b = {
              id: e.data.newPost._id,
              text: '\u0111\xe3 th\xeam m\u1ed9t b\xe0i vi\u1ebft',
              recipients: e.data.newPost.user.followers,
              url: '/post/'.concat(e.data.newPost._id),
              content: s,
              image: j[0].url,
            };
            t(Object(l.b)({ auth: o, msg: b, socket: d }));
          } catch (b) {
            t({ type: n.c.ALERT, payload: { error: b.response.data.msg } });
          }
        },
        o = (e) => async (t) => {
          try {
            t({ type: r.LOADING_POST, payload: !0 });
            const s = await Object(c.b)('posts', e);
            t({ type: r.GET_POSTS, payload: { ...s.data, page: 2 } }), t({ type: r.LOADING_POST, payload: !1 });
          } catch (s) {
            t({ type: n.c.ALERT, payload: { error: s.response.data.msg } });
          }
        },
        d = (e) => async (t) => {
          const { content: s, images: l, auth: i, status: o } = e;
          let d = [];
          const j = l.filter((e) => !e.url),
            b = l.filter((e) => e.url);
          if (o.content !== s || 0 !== j.length || b.length !== o.images.length)
            try {
              t({ type: n.c.ALERT, payload: { loading: !0 } }), j.length > 0 && (d = await Object(a.b)(j));
              const e = await Object(c.c)('post/'.concat(o._id), { content: s, images: [...b, ...d] }, i.token);
              t({ type: r.UPDATE_POST, payload: e.data.newPost }),
                t({ type: n.c.ALERT, payload: { success: e.data.msg } });
            } catch (m) {
              t({ type: n.c.ALERT, payload: { error: m.response.data.msg } });
            }
        },
        j = (e) => async (t) => {
          const { auth: s, post: a, socket: i } = e,
            o = { ...a, likes: [...a.likes, s.user] };
          t({ type: r.UPDATE_POST, payload: o }), i.emit('likePost', o);
          try {
            await Object(c.c)('post/'.concat(a._id, '/like'), null, s.token);
            const e = {
              id: s.user._id,
              text: '\u0111\xe3 th\xedch b\xe0i vi\u1ebft c\u1ee7a b\u1ea1n',
              recipients: [a.user._id],
              url: '/post/'.concat(a._id),
              content: a.content,
              image: a.images[0].url,
            };
            t(Object(l.b)({ auth: s, msg: e, socket: i }));
          } catch (d) {
            t({ type: n.c.ALERT, payload: { error: d.response.data.msg } });
          }
        },
        b = (e) => async (t) => {
          const { auth: s, post: a, socket: i } = e,
            o = { ...a, likes: a.likes.filter((e) => e._id !== s.user._id) };
          t({ type: r.UPDATE_POST, payload: o }), i.emit('unLikePost', o);
          try {
            await Object(c.c)('post/'.concat(a._id, '/unlike'), null, s.token);
            const e = {
              id: s.user._id,
              text: '\u0111\xe3 th\xedch b\xe0i vi\u1ebft c\u1ee7a b\u1ea1n',
              recipients: [a.user._id],
              url: '/post/'.concat(a._id),
            };
            t(Object(l.f)({ auth: s, msg: e, socket: i }));
          } catch (d) {
            t({ type: n.c.ALERT, payload: { error: d.response.data.msg } });
          }
        },
        m = (e) => async (t) => {
          const { auth: s, postDetails: a, id: l } = e;
          if (a.every((e) => e._id !== l))
            try {
              const e = await Object(c.b)('post/'.concat(l), s.token);
              t({ type: r.GET_POST, payload: e.data.postDetails });
            } catch (i) {
              t({ type: n.c.ALERT, payload: { error: i.response.data.msg } });
            }
        },
        u = (e) => async (t) => {
          const { auth: s, post: a, socket: i } = e;
          t({ type: r.DELETE_POST, payload: a });
          try {
            const e = await Object(c.a)('post/'.concat(a._id), s.token),
              n = {
                id: a._id,
                text: 'added a new post',
                recipients: e.data.newPost.user.followers,
                url: '/post/'.concat(a._id),
              };
            t(Object(l.f)({ auth: s, msg: n, socket: i }));
          } catch (o) {
            t({ type: n.c.ALERT, payload: { error: o.response.data.msg } });
          }
        },
        h = (e) => async (t) => {
          const { post: s, auth: a } = e,
            l = { ...a.user, saved: [...a.user.saved, s._id] };
          t({ type: n.c.AUTH, payload: { ...a, user: l } });
          try {
            await Object(c.c)('savePost/'.concat(s._id), null, a.token);
          } catch (r) {
            t({ type: n.c.ALERT, payload: { error: r.response.data.msg } });
          }
        },
        O = (e) => async (t) => {
          const { post: s, auth: a } = e,
            l = { ...a.user, saved: a.user.saved.filter((e) => e !== s._id) };
          t({ type: n.c.AUTH, payload: { ...a, user: l } });
          try {
            await Object(c.c)('unSavePost/'.concat(s._id), null, a.token);
          } catch (r) {
            t({ type: n.c.ALERT, payload: { error: r.response.data.msg } });
          }
        };
    },
    73: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'default', function () {
          return d;
        });
      var c = s(28),
        a = s(29),
        n = s(1),
        l = s(3),
        r = s(44),
        i = s(4),
        o = s(0);
      function d() {
        const [e, t] = Object(a.a)(function () {
            setTimeout(() => {
              b();
            }, 1e3);
          }),
          { auth: s, discover: d } = Object(l.c)((e) => e),
          j = Object(l.b)();
        Object(n.useEffect)(() => {
          d.firstLoad || j(Object(r.getDiscoverPosts)(s.token));
        }, [s.token, j, d.firstLoad]);
        const b = async () => {
          t(!0);
          const e = await Object(i.b)('post_discover?num='.concat(3 * d.page), s.token);
          j({ type: r.DISCOVER_TYPES.UPDATE_POST, payload: e.data }), t(!1);
        };
        return Object(o.jsx)('div', {
          className: 'discover',
          children: Object(o.jsx)('div', {
            className: 'container-fluid pt-5',
            children: Object(o.jsxs)('div', {
              className: 'width-905 mx-auto',
              children: [
                Object(o.jsxs)('div', {
                  className:
                    'rounded-3 p-3 shadow mb-4 bg-white d-flex align-items-center justify-content-between border',
                  children: [
                    Object(o.jsx)('span', { className: 'fw-600 fs-4', children: 'Kh\xe1m ph\xe1 b\xe0i vi\u1ebft.' }),
                    Object(o.jsx)('i', { className: 'far fa-list-alt fs-4' }),
                  ],
                }),
                d.loading
                  ? Object(o.jsx)('div', { className: 'loader' })
                  : Object(o.jsx)(c.a, { posts: d.posts, result: d.result }),
                e && Object(o.jsx)('div', { className: 'loader' }),
              ],
            }),
          }),
        });
      }
    },
    75: function (e, t, s) {
      'use strict';
      s.r(t);
      var c = s(46),
        a = s(1),
        n = s(3),
        l = s(10),
        r = s(6),
        i = s(0);
      t.default = function () {
        const [e, t] = Object(a.useState)([]),
          { id: s } = Object(l.useParams)(),
          { auth: o, postDetails: d } = Object(n.c)((e) => e),
          j = Object(n.b)();
        return (
          Object(a.useEffect)(() => {
            if ((j(Object(r.d)({ auth: o, postDetails: d, id: s })), d.length > 0)) {
              const e = d.filter((e) => e._id === s);
              t(e);
            }
          }, [d, s, o, j]),
          Object(i.jsxs)('div', {
            className: 'post-details width-682 mx-auto mt-4 mb-5',
            children: [
              0 === e.length && Object(i.jsx)('div', { className: 'loader' }),
              e.map((e) => Object(i.jsx)(c.a, { post: e }, e._id)),
            ],
          })
        );
      };
    },
    77: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'default', function () {
          return N;
        });
      var c = s(1),
        a = s(3),
        n = s(2),
        l = s(11),
        r = s(20),
        i = s(0);
      function o(e) {
        let { setFormChangeAvatar: t } = e;
        const [s, o] = Object(c.useState)(''),
          { auth: d } = Object(a.c)((e) => e),
          j = Object(a.b)();
        return Object(i.jsx)('div', {
          className: 'change_avatar',
          children: Object(i.jsxs)('form', {
            className: 'shadow rounded-3',
            onSubmit: (e) => {
              e.preventDefault(), j(Object(l.e)({ avatar: s, auth: d })), t(!1);
            },
            children: [
              Object(i.jsx)('div', {
                className: 'd-flex align-items-center justify-content-end',
                children: Object(i.jsx)('button', {
                  type: 'button',
                  className: 'btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center',
                  onClick: () => t(!1),
                  children: Object(i.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                }),
              }),
              Object(i.jsxs)('div', {
                className: 'avatar d-flex flex-column align-items-center',
                children: [
                  Object(i.jsx)('div', {
                    className: 'block-avatar mb-3',
                    children: Object(i.jsx)('img', {
                      src: s ? URL.createObjectURL(s) : d.user.avatar,
                      className: 'img-fluid w-100',
                      alt: '',
                    }),
                  }),
                  Object(i.jsxs)('label', {
                    htmlFor: 'file_up',
                    className: 'rounded-3 fw-bold',
                    children: [
                      Object(i.jsx)('span', { className: 'material-icons-outlined me-2', children: 'add_a_photo' }),
                      'T\u1ea3i \u1ea3nh l\xean',
                      Object(i.jsx)('input', {
                        type: 'file',
                        name: 'file',
                        id: 'file_up',
                        accept: 'image/*',
                        onChange: (e) => {
                          const t = e.target.files[0],
                            s = Object(r.a)(t);
                          s && j({ type: n.c.ALERT, payload: { error: s } }), o(t);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              Object(i.jsxs)('div', {
                className: 'row',
                children: [
                  Object(i.jsx)('div', {
                    className: 'col-lg-6 d-flex align-items-center justify-content-start',
                    children: Object(i.jsx)('span', {
                      className: 'text-primary fw-bold',
                      children: 'Thay \u0111\u1ed5i avatar',
                    }),
                  }),
                  Object(i.jsx)('div', {
                    className: 'col-lg-6 text-end',
                    children: Object(i.jsx)('button', {
                      className: 'btn btn-primary fw-bold',
                      type: 'submit',
                      children: 'Luu',
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var d = s(22),
        j = s(17);
      var b = function (e) {
        let { users: t, setShowFollowers: s } = e;
        const { auth: c } = Object(a.c)((e) => e);
        return Object(i.jsx)('div', {
          className: 'follow',
          children: Object(i.jsxs)('div', {
            className: 'follow_block p-3 shadow',
            children: [
              Object(i.jsxs)('div', {
                className: 'd-flex justify-content-center align-items-center',
                children: [
                  Object(i.jsx)('h4', { className: 'mb-0', children: 'Ng\u01b0\u1eddi theo d\xf5i' }),
                  Object(i.jsx)('button', {
                    className:
                      'btn btn-edit rounded-circle circle d-flex align-items-center justify-content-center position-absolute',
                    style: { right: '1rem' },
                    type: 'button',
                    onClick: () => s(!1),
                    children: Object(i.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                  }),
                ],
              }),
              Object(i.jsx)('hr', {}),
              Object(i.jsx)('ul', {
                children: t.map((e) =>
                  Object(i.jsxs)(
                    'li',
                    {
                      className: 'rounded-2 d-flex justify-content-between',
                      children: [
                        Object(i.jsx)(j.a, { user: e, setShowFollowers: s }),
                        Object(i.jsx)('div', {
                          className: 'p-3',
                          children: c.user._id !== e._id && Object(i.jsx)(d.a, { user: e }),
                        }),
                      ],
                    },
                    e._id
                  )
                ),
              }),
            ],
          }),
        });
      };
      var m = function (e) {
        let { users: t, setShowFollowing: s } = e;
        const { auth: c } = Object(a.c)((e) => e);
        return Object(i.jsx)('div', {
          className: 'follow',
          children: Object(i.jsxs)('div', {
            className: 'follow_block p-3 shadow',
            children: [
              Object(i.jsxs)('div', {
                className: 'd-flex justify-content-center align-items-center',
                children: [
                  Object(i.jsx)('h4', { className: 'mb-0', children: '\u0110ang theo d\xf5i' }),
                  Object(i.jsx)('button', {
                    className:
                      'btn btn-edit rounded-circle circle d-flex align-items-center justify-content-center position-absolute',
                    style: { right: '1rem' },
                    type: 'button',
                    onClick: () => s(!1),
                    children: Object(i.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                  }),
                ],
              }),
              Object(i.jsx)('hr', {}),
              Object(i.jsx)('ul', {
                children: t.map((e) =>
                  Object(i.jsxs)(
                    'li',
                    {
                      className: 'rounded-2 d-flex justify-content-between',
                      children: [
                        Object(i.jsx)(j.a, { user: e, setShowFollowing: s }),
                        Object(i.jsx)('div', {
                          className: 'p-3',
                          children: c.user._id !== e._id && Object(i.jsx)(d.a, { user: e }),
                        }),
                      ],
                    },
                    e._id
                  )
                ),
              }),
            ],
          }),
        });
      };
      function u(e) {
        let { user: t, setOnEdit: s } = e;
        const [n, r] = Object(c.useState)({
            fullname: '',
            mobile: '',
            classStudy: '',
            faculty: '',
            major: '',
            course: '',
            gender: '',
          }),
          { fullname: o, mobile: d, classStudy: j, faculty: b, major: m, course: u, gender: h } = n,
          { auth: O } = Object(a.c)((e) => e),
          p = Object(a.b)();
        Object(c.useEffect)(() => {
          r(t);
        }, [t]);
        const x = (e) => {
          const { name: t, value: s } = e.target;
          r({ ...n, [t]: s });
        };
        return Object(i.jsx)('div', {
          className: 'edit_profile',
          children: Object(i.jsxs)('form', {
            className: 'rounded-3 shadow',
            onSubmit: (e) => {
              e.preventDefault(), p(Object(l.f)({ userData: n, auth: O })), s(!1);
            },
            children: [
              Object(i.jsxs)('div', {
                className: 'info_avatar mb-3',
                children: [
                  Object(i.jsxs)('div', {
                    className: 'position-relative d-flex align-items-center justify-content-center',
                    children: [
                      Object(i.jsx)('h4', { children: 'Ch\u1ec9nh s\u1eeda chi ti\u1ebft' }),
                      Object(i.jsx)('button', {
                        className:
                          'btn btn-edit position-absolute rounded-circle d-flex justify-content-center align-items-center',
                        style: { top: '0', right: '0', width: '36px', height: '36px' },
                        type: 'button',
                        onClick: () => s(!1),
                        children: Object(i.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                      }),
                    ],
                  }),
                  Object(i.jsx)('hr', {}),
                  Object(i.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(i.jsxs)('label', {
                      htmlFor: 'fullname',
                      children: [
                        'H\u1ecd v\xe0 t\xean',
                        ' ',
                        Object(i.jsxs)('div', {
                          className: 'position-relative',
                          children: [
                            Object(i.jsx)('input', {
                              type: 'text',
                              className: 'form-control',
                              id: 'fullname',
                              name: 'fullname',
                              value: o,
                              onChange: x,
                            }),
                            Object(i.jsxs)('small', {
                              className: 'position-absolute text-danger',
                              style: { top: '50%', right: '5px', transform: 'translateY(-50%)' },
                              children: [o.length, '/25'],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(i.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(i.jsxs)('label', {
                      htmlFor: 'mobile',
                      children: [
                        'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                        ' ',
                        Object(i.jsx)('input', {
                          type: 'text',
                          className: 'form-control',
                          id: 'mobile',
                          name: 'mobile',
                          value: d,
                          onChange: x,
                        }),
                      ],
                    }),
                  }),
                  Object(i.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(i.jsxs)('label', {
                      htmlFor: 'classStudy',
                      children: [
                        'L\u1edbp',
                        ' ',
                        Object(i.jsx)('input', {
                          type: 'text',
                          className: 'form-control',
                          id: 'classStudy',
                          name: 'classStudy',
                          value: j,
                          onChange: x,
                        }),
                      ],
                    }),
                  }),
                  Object(i.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(i.jsxs)('label', {
                      htmlFor: 'faculty',
                      children: [
                        'Khoa',
                        ' ',
                        Object(i.jsx)('input', {
                          type: 'text',
                          className: 'form-control',
                          id: 'faculty',
                          name: 'faculty',
                          value: b,
                          onChange: x,
                        }),
                      ],
                    }),
                  }),
                  Object(i.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(i.jsxs)('label', {
                      htmlFor: 'major',
                      children: [
                        'Ng\xe0nh',
                        ' ',
                        Object(i.jsx)('div', {
                          className: 'position-relative',
                          children: Object(i.jsx)('textarea', {
                            className: 'form-control',
                            id: 'major',
                            name: 'major',
                            value: m,
                            onChange: x,
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(i.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(i.jsxs)('label', {
                      htmlFor: 'course',
                      children: [
                        'Kho\xe1',
                        ' ',
                        Object(i.jsx)('input', {
                          type: 'text',
                          className: 'form-control',
                          id: 'course',
                          name: 'course',
                          value: u,
                          onChange: x,
                        }),
                      ],
                    }),
                  }),
                  Object(i.jsxs)('label', {
                    htmlFor: 'gender',
                    children: [
                      'Gi\u1edbi t\xednh',
                      ' ',
                      Object(i.jsx)('div', {
                        className: 'input-group-prepend',
                        children: Object(i.jsxs)('select', {
                          name: 'gender',
                          id: 'gender',
                          value: h,
                          onChange: x,
                          className: 'form-select',
                          children: [
                            Object(i.jsx)('option', { value: 'male', children: 'Nam' }),
                            Object(i.jsx)('option', { value: 'female', children: 'N\u1eef' }),
                            Object(i.jsx)('option', { value: 'other', children: 'Kh\xe1c' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(i.jsxs)('div', {
                className: 'row',
                children: [
                  Object(i.jsx)('div', { className: 'col-lg-6' }),
                  Object(i.jsxs)('div', {
                    className: 'col-lg-6 text-end',
                    children: [
                      Object(i.jsx)('button', { type: 'reset', className: 'btn btn-edit', children: 'Hu\u1ef7' }),
                      Object(i.jsx)('button', {
                        className: 'btn btn-primary ms-2',
                        type: 'submit',
                        children: 'L\u01b0u',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var h = s(28),
        O = s(29),
        p = s(4);
      function x(e) {
        const { auth: t, profile: s, dispatch: a, id: n } = e,
          [r, o] = Object(c.useState)([]),
          [d, j] = Object(c.useState)(0),
          [b, m] = Object(O.a)(function () {
            setTimeout(() => {
              u();
            }, 1e3);
          });
        Object(c.useEffect)(() => {
          s.userPosts.forEach((e) => {
            e._id === n && (o(e.posts), j(e.page));
          });
        }, [s.userPosts, n]);
        const u = async () => {
          m(!0);
          const e = {
            ...(await Object(p.b)('user_posts/'.concat(n, '?limit=').concat(9 * d), t.token)).data,
            page: d + 1,
            _id: n,
          };
          a({ type: l.a.UPDATE_POST, payload: e }), m(!1);
        };
        return Object(i.jsxs)(i.Fragment, {
          children: [Object(i.jsx)(h.a, { posts: r }), b && Object(i.jsx)('div', { className: 'loader' })],
        });
      }
      var f = function (e) {
        let { result: t, page: s, load: c, handleLoadMore: a } = e;
        return Object(i.jsx)(i.Fragment, {
          children:
            t < 9 * (s - 1)
              ? ''
              : !c &&
                Object(i.jsx)('button', {
                  type: 'button',
                  className: 'btn btn-primary d-block mx-auto mb-3',
                  onClick: a,
                  children: 'Load more',
                }),
        });
      };
      var y = function (e) {
        let { auth: t, dispatch: s } = e;
        const [a, l] = Object(c.useState)([]),
          [r, o] = Object(c.useState)(9),
          [d, j] = Object(c.useState)(2),
          [b, m] = Object(c.useState)(!1);
        return (
          Object(c.useEffect)(
            () => (
              m(!0),
              Object(p.b)('getSavePosts', t.token)
                .then((e) => {
                  l(e.data.savePosts), o(e.data.result), m(!1);
                })
                .catch((e) => {
                  s({ type: n.c.ALERT, payload: { error: e.response.data.msg } });
                }),
              () => l([])
            ),
            [t.token, s]
          ),
          Object(i.jsxs)('div', {
            children: [
              Object(i.jsx)('p', {
                children: Object(i.jsx)('span', { className: 'fs-5 fw-600', children: 'T\u1ea5t c\u1ea3' }),
              }),
              Object(i.jsx)(h.a, { posts: a, result: r }),
              b && Object(i.jsx)('div', { className: 'loader d-block mx-auto' }),
              Object(i.jsx)(f, {
                result: r,
                page: d,
                load: b,
                handleLoadMore: async () => {
                  m(!0);
                  const e = await Object(p.b)('getSavePosts?limit='.concat(9 * d), t.token);
                  l(e.data.savePosts), o(e.data.result), j(d + 1), m(!1);
                },
              }),
            ],
          })
        );
      };
      function g(e) {
        const { auth: t, profile: s, dispatch: a, id: n } = e,
          [l, r] = Object(c.useState)([]),
          [j, h] = Object(c.useState)(!1),
          [O, p] = Object(c.useState)(!1),
          [f, g] = Object(c.useState)(!1),
          [v, N] = Object(c.useState)(!1),
          [_, w] = Object(c.useState)(!1);
        return (
          Object(c.useEffect)(() => {
            if (n === t.user._id) r([t.user]);
            else {
              const e = s.users.filter((e) => e._id === n);
              r(e);
            }
          }, [n, t.user, s.users]),
          Object(i.jsx)('div', {
            className: 'info',
            children: l.map((e) =>
              Object(i.jsxs)(
                'div',
                {
                  className: 'info__container',
                  children: [
                    Object(i.jsxs)('div', {
                      className: 'info__content w-100',
                      children: [
                        Object(i.jsx)('div', {
                          className: 'info__content__title bg-white shadow-sm',
                          children: Object(i.jsxs)('div', {
                            className: 'container px-0',
                            children: [
                              Object(i.jsxs)('div', {
                                className: 'position-relative edit-avatar mb-3',
                                children: [
                                  Object(i.jsx)('div', {
                                    className: 'block-avatar',
                                    children: Object(i.jsx)('img', {
                                      src: e.avatar,
                                      width: '168',
                                      className: 'img-fluid',
                                      alt: 'avatar',
                                    }),
                                  }),
                                  e._id === t.user._id
                                    ? Object(i.jsx)('button', {
                                        type: 'button',
                                        className:
                                          'btn btn-edit d-flex justify-content-center align-items-center rounded-circle circle',
                                        onClick: () => p(!0),
                                        children: Object(i.jsx)('span', {
                                          className: 'material-icons',
                                          children: 'photo_camera',
                                        }),
                                      })
                                    : '',
                                ],
                              }),
                              O && Object(i.jsx)(o, { user: e, setFormChangeAvatar: p }),
                              Object(i.jsxs)('div', {
                                className: 'container-fluid mw-878 mx-auto',
                                children: [
                                  Object(i.jsx)('h1', { children: e.fullname }),
                                  Object(i.jsx)('span', { children: e.username }),
                                  Object(i.jsx)('hr', { className: 'mb-0' }),
                                  Object(i.jsxs)('div', {
                                    className: 'row mx-auto fs-14 py-2',
                                    children: [
                                      Object(i.jsx)('div', {
                                        className: 'col col-lg-6 col-md-6 col-sm-12 ps-0 d-none d-sm-block',
                                        children:
                                          t.user._id === n &&
                                          Object(i.jsxs)('ul', {
                                            className: 'tab align-items-center mb-0',
                                            children: [
                                              Object(i.jsx)('button', {
                                                type: 'button',
                                                className: _ ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2',
                                                onClick: () => w(!1),
                                                children: Object(i.jsx)('span', { children: ' B\xe0i vi\u1ebft' }),
                                              }),
                                              Object(i.jsx)('button', {
                                                type: 'button',
                                                className: _ ? 'btn btn-outline-primary' : 'btn btn-primary',
                                                onClick: () => w(!0),
                                                children: Object(i.jsx)('span', {
                                                  children: 'B\xe0i vi\u1ebft \u0111\xe3 l\u01b0u',
                                                }),
                                              }),
                                            ],
                                          }),
                                      }),
                                      Object(i.jsx)('div', {
                                        className: 'col col-lg-6 col-md-6 col-sm-12 pe-0 setting-profile',
                                        children:
                                          e._id === t.user._id
                                            ? Object(i.jsx)('div', {
                                                className: 'd-flex h-100 align-items-center justify-content-end',
                                                children: Object(i.jsx)('button', {
                                                  type: 'button',
                                                  className: 'btn btn-edit fw-600',
                                                  children: Object(i.jsx)('p', {
                                                    className: 'mb-0 d-flex align-items-end',
                                                    children: Object(i.jsx)('span', {
                                                      className: 'material-icons-outlined',
                                                      children: 'more_horiz',
                                                    }),
                                                  }),
                                                }),
                                              })
                                            : Object(i.jsx)('div', {
                                                className:
                                                  'd-flex h-100 align-items-center justify-content-end profile-follow',
                                                children: Object(i.jsx)(d.a, { user: e }),
                                              }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(i.jsx)('div', {
                          className: 'info__content__body mw-878 container mt-4',
                          children: s.loading
                            ? Object(i.jsx)('div', { className: 'loader d-block mx-auto' })
                            : Object(i.jsx)(i.Fragment, {
                                children: _
                                  ? Object(i.jsx)(y, { auth: t, dispatch: a })
                                  : Object(i.jsxs)('div', {
                                      className: 'row',
                                      children: [
                                        Object(i.jsxs)('div', {
                                          className: 'col-lg-12 col-md-12',
                                          children: [
                                            Object(i.jsxs)('div', {
                                              className: 'rounded-10 bg-white p-3 shadow-sm border',
                                              children: [
                                                Object(i.jsx)('h2', {
                                                  className: 'fw-bold fs-5',
                                                  children: 'Gi\u1edbi thi\u1ec7u',
                                                }),
                                                Object(i.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(i.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'account_circle',
                                                    }),
                                                    Object(i.jsx)('span', { children: e.fullname }),
                                                  ],
                                                }),
                                                Object(i.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  style: { columnGap: '1rem' },
                                                  children: [
                                                    Object(i.jsx)('span', {
                                                      className: 'material-icons-outlined text-secondary',
                                                      children: 'school',
                                                    }),
                                                    e.classStudy &&
                                                      Object(i.jsxs)(i.Fragment, {
                                                        children: [
                                                          Object(i.jsx)('span', { children: 'L\u1edbp:' }),
                                                          ' ',
                                                          Object(i.jsx)('b', { children: e.classStudy }),
                                                        ],
                                                      }),
                                                    e.faculty &&
                                                      Object(i.jsx)(i.Fragment, {
                                                        children: Object(i.jsxs)('span', {
                                                          children: [
                                                            'Khoa: ',
                                                            Object(i.jsx)('b', { children: e.faculty }),
                                                          ],
                                                        }),
                                                      }),
                                                    e.major &&
                                                      Object(i.jsx)(i.Fragment, {
                                                        children: Object(i.jsxs)('span', {
                                                          children: [
                                                            'Ng\xe0nh: ',
                                                            Object(i.jsx)('b', { children: e.major }),
                                                          ],
                                                        }),
                                                      }),
                                                    e.course &&
                                                      Object(i.jsx)(i.Fragment, {
                                                        children: Object(i.jsxs)('span', {
                                                          children: [
                                                            'Kho\xe1: ',
                                                            Object(i.jsx)('b', { children: e.course }),
                                                          ],
                                                        }),
                                                      }),
                                                  ],
                                                }),
                                                Object(i.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(i.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'contact_mail',
                                                    }),
                                                    Object(i.jsx)('span', { children: e.email }),
                                                  ],
                                                }),
                                                Object(i.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(i.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'people',
                                                    }),
                                                    Object(i.jsxs)('span', {
                                                      children: [
                                                        '\u0110ang theo d\xf5i',
                                                        ' ',
                                                        Object(i.jsx)('strong', {
                                                          role: 'button',
                                                          className: 'hover-underline',
                                                          tabIndex: 0,
                                                          onClick: () => N(!0),
                                                          onKeyDown: () => N(!0),
                                                          children: e.following.length,
                                                        }),
                                                        ' ',
                                                        'ng\u01b0\u1eddi',
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(i.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(i.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'rss_feed',
                                                    }),
                                                    Object(i.jsxs)('span', {
                                                      children: [
                                                        'C\xf3',
                                                        ' ',
                                                        Object(i.jsx)('strong', {
                                                          role: 'button',
                                                          className: 'hover-underline',
                                                          tabIndex: 0,
                                                          onClick: () => g(!0),
                                                          onKeyDown: () => g(!0),
                                                          children: e.followers.length,
                                                        }),
                                                        ' ',
                                                        'ng\u01b0\u1eddi theo d\xf5i',
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(i.jsx)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: Object(i.jsx)('a', {
                                                    href: e.website,
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    className: 'text-wrap',
                                                    children: e.website,
                                                  }),
                                                }),
                                                e._id === t.user._id
                                                  ? Object(i.jsx)('button', {
                                                      type: 'button',
                                                      className: 'btn btn-edit fw-600 w-100',
                                                      onClick: () => h(!0),
                                                      children: 'Ch\u1ec9nh s\u1eeda chi ti\u1ebft',
                                                    })
                                                  : '',
                                                j && Object(i.jsx)(u, { user: e, setOnEdit: h }),
                                              ],
                                            }),
                                            Object(i.jsx)('hr', {}),
                                          ],
                                        }),
                                        Object(i.jsx)('div', { className: 'w-100' }),
                                        Object(i.jsx)('div', {
                                          className: 'col-lg-12 col-md-12',
                                          children: Object(i.jsx)(x, { auth: t, profile: s, dispatch: a, id: n }),
                                        }),
                                      ],
                                    }),
                              }),
                        }),
                      ],
                    }),
                    f && Object(i.jsx)(b, { users: e.followers, setShowFollowers: g }),
                    v && Object(i.jsx)(m, { users: e.following, setShowFollowing: N }),
                  ],
                },
                e._id
              )
            ),
          })
        );
      }
      var v = s(10);
      function N() {
        const { profile: e, auth: t } = Object(a.c)((e) => e),
          s = Object(a.b)(),
          { id: n } = Object(v.useParams)();
        return (
          Object(c.useEffect)(() => {
            e.ids.every((e) => e !== n) && s(Object(l.c)({ users: e.users, id: n, auth: t }));
          }, [n, e.users, t, s]),
          Object(i.jsx)('div', {
            className: 'profile',
            children: e.loading
              ? Object(i.jsx)('div', { className: 'loader d-block mx-auto my-5' })
              : Object(i.jsx)(g, { auth: t, profile: e, dispatch: s, id: n }),
          })
        );
      }
    },
    78: function (e, t, s) {
      'use strict';
      s.r(t);
      var c = s(45),
        a = s(27),
        n = s(1),
        l = s(3),
        r = s(10),
        i = s(5),
        o = s(2),
        d = s(8),
        j = s(20),
        b = s(18),
        m = s(0);
      var u = function (e) {
        let { total: t } = e;
        return Object(m.jsxs)('div', {
          children: [
            Object(m.jsx)('span', {
              children:
                parseInt(t / 3600, 10).toString().length < 2
                  ? '0'.concat(parseInt(t / 3600, 10))
                  : parseInt(t / 3600, 10),
            }),
            Object(m.jsx)('span', { children: ':' }),
            Object(m.jsx)('span', {
              children:
                parseInt(t / 60, 10).toString().length < 2 ? '0'.concat(parseInt(t / 60, 10)) : parseInt(t / 60, 10),
            }),
            Object(m.jsx)('span', { children: ':' }),
            Object(m.jsx)('span', {
              children: (t % 60).toString().length < 2 ? '0'.concat(t % 60, 's') : ''.concat(t % 60, 's'),
            }),
          ],
        });
      };
      var h = function (e) {
        let { user: t, msg: s, data: c } = e;
        const { auth: a } = Object(l.c)((e) => e),
          n = Object(l.b)();
        return Object(m.jsxs)(m.Fragment, {
          children: [
            Object(m.jsxs)('div', {
              className: 'chat_title',
              style: { display: t._id === a.user._id ? 'none' : 'block' },
              children: [
                Object(m.jsx)('img', {
                  src: t.avatar,
                  className: 'rounded-circle circle-sm img-cover me-1',
                  alt: 'avatar',
                }),
                Object(m.jsx)('span', { className: 'fw-500', children: t.fullname }),
              ],
            }),
            Object(m.jsxs)('div', {
              className: 'you_content',
              children: [
                t._id === a.user._id &&
                  Object(m.jsx)('button', {
                    type: 'button',
                    onClick: () => {
                      c &&
                        window.confirm('B\u1ea1n c\xf3 mu\u1ed1n thu h\u1ed3i tin nh\u1eafn ch\u1ee9?') &&
                        n(Object(d.d)({ msg: s, data: c, auth: a }));
                    },
                    children: Object(m.jsx)('i', { className: 'fas fa-trash' }),
                  }),
                Object(m.jsxs)('div', {
                  children: [
                    s.text && Object(m.jsx)('div', { className: 'chat_text', children: s.text }),
                    s.media.map((e, t) =>
                      Object(m.jsx)(
                        'div',
                        { children: e.url.match(/video/i) ? Object(b.b)(e.url) : Object(b.a)(e.url) },
                        t
                      )
                    ),
                  ],
                }),
                s.call &&
                  Object(m.jsxs)('button', {
                    type: 'button',
                    className: 'btn d-flex align-items-center py-3 btn-edit rounded-10',
                    children: [
                      Object(m.jsx)('span', {
                        className: 'material-icons fw-bold me-1 fs-4',
                        style: { color: 0 === s.call.times ? '#e74c3c' : '#2ecc71' },
                        children:
                          0 === s.call.times
                            ? s.call.video
                              ? 'videocam_off'
                              : 'phone_disabled'
                            : s.call.video
                            ? 'video_camera_front'
                            : 'call',
                      }),
                      Object(m.jsxs)('div', {
                        className: 'text-start',
                        children: [
                          Object(m.jsx)('h6', { children: s.call.video ? 'Video call' : 'Audio Call' }),
                          Object(m.jsx)('small', {
                            children:
                              s.call.times > 0
                                ? Object(m.jsx)(u, { total: s.call.times })
                                : new Date(s.call.times).toLocaleTimeString(),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            Object(m.jsx)('div', { className: 'chat_time', children: new Date(s.createdAt).toLocaleString() }),
          ],
        });
      };
      var O = () => {
        const { auth: e, message: t, theme: s, socket: c, peer: u } = Object(l.c)((e) => e),
          O = Object(l.b)(),
          { id: p } = Object(r.useParams)(),
          [x, f] = Object(n.useState)([]),
          [y, g] = Object(n.useState)(''),
          [v, N] = Object(n.useState)([]),
          [_, w] = Object(n.useState)(!1),
          E = Object(n.useRef)(),
          T = Object(n.useRef)(),
          [k, S] = Object(n.useState)([]),
          [L, A] = Object(n.useState)(9),
          [C, P] = Object(n.useState)(0),
          [D, R] = Object(n.useState)(0),
          I = Object(r.useHistory)();
        Object(n.useEffect)(() => {
          const e = t.data.find((e) => e._id === p);
          e && (S(e.messages), A(e.result), P(e.page));
        }, [t.data, p]),
          Object(n.useEffect)(() => {
            if (p && t.users.length > 0) {
              setTimeout(() => {
                E.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
              }, 50);
              const e = t.users.find((e) => e._id === p);
              e && f(e);
            }
          }, [t.users, p]);
        Object(n.useEffect)(() => {
          (async () => {
            t.data.every((e) => e._id !== p) &&
              (await O(Object(d.f)({ auth: e, id: p })),
              setTimeout(() => {
                E.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
              }, 50));
          })();
        }, [p, O, e, t.data]),
          Object(n.useEffect)(() => {
            new IntersectionObserver(
              (e) => {
                e[0].isIntersecting && R((e) => e + 1);
              },
              { threshold: 0.1 }
            ).observe(T.current);
          }, [R]),
          Object(n.useEffect)(() => {
            D > 1 && L >= 9 * C && (O(Object(d.g)({ auth: e, id: p, page: C + 1 })), R(1));
          }, [D]);
        const U = (t) => {
            let { video: s } = t;
            const { _id: c, avatar: a, username: n, fullname: l } = x,
              r = { sender: e.user._id, recipient: c, avatar: a, username: n, fullname: l, video: s };
            O({ type: o.c.CALL, payload: r });
          },
          F = (t) => {
            let { video: s } = t;
            const { _id: a, avatar: n, username: l, fullname: r } = e.user,
              i = { sender: a, recipient: x._id, avatar: n, username: l, fullname: r, video: s };
            u.open && (i.peerId = u._id), c.emit('callUser', i);
          };
        return Object(m.jsxs)(m.Fragment, {
          children: [
            Object(m.jsx)('div', {
              className: 'message_header',
              style: { cursor: 'pointer' },
              children:
                0 !== x.length &&
                Object(m.jsxs)('div', {
                  className: 'd-flex align-items-center justify-content-between p-3 w-100',
                  children: [
                    Object(m.jsx)('div', {
                      children: Object(m.jsxs)(i.b, {
                        to: '/profile/'.concat(e.user._id),
                        className: 'text-dark hover-underline',
                        children: [
                          Object(m.jsx)('img', {
                            src: x.avatar,
                            className: 'img-cover rounded-circle circle me-2',
                            alt: 'avatar',
                          }),
                          Object(m.jsx)('span', { className: 'fw-600', children: x.fullname }),
                        ],
                      }),
                    }),
                    Object(m.jsxs)('div', {
                      children: [
                        Object(m.jsx)('i', {
                          className: 'fas fa-phone-alt',
                          onClick: () => {
                            U({ video: !1 }), F({ video: !1 });
                          },
                        }),
                        Object(m.jsx)('i', {
                          className: 'fas fa-video mx-3',
                          onClick: () => {
                            U({ video: !0 }), F({ video: !0 });
                          },
                        }),
                        Object(m.jsx)('i', {
                          className: 'fas fa-trash text-danger',
                          onClick: () =>
                            window.confirm('B\u1ea1n c\xf3 mu\u1ed1n xo\xe1 tin nh\u1eafn?')
                              ? (O(Object(d.c)({ auth: e, id: p })), I.push('/message'))
                              : null,
                        }),
                      ],
                    }),
                  ],
                }),
            }),
            Object(m.jsx)('div', {
              className: 'chat_container',
              style: { height: v.length > 0 ? 'calc(100% - 180px)' : '' },
              children: Object(m.jsxs)('div', {
                className: 'chat_display',
                ref: E,
                children: [
                  Object(m.jsx)('button', {
                    type: 'button',
                    style: { marginTop: '-25px', opacity: 0 },
                    ref: T,
                    children: 'Load more',
                  }),
                  k.map((t, c) =>
                    Object(m.jsxs)(
                      'div',
                      {
                        children: [
                          t.sender !== e.user._id &&
                            Object(m.jsx)('div', {
                              className: 'chat_row other_message',
                              children: Object(m.jsx)(h, { user: x, msg: t, theme: s }),
                            }),
                          t.sender === e.user._id &&
                            Object(m.jsx)('div', {
                              className: 'chat_row you_message',
                              children: Object(m.jsx)(h, { user: e.user, msg: t, theme: s, data: k }),
                            }),
                        ],
                      },
                      c
                    )
                  ),
                  _ &&
                    Object(m.jsx)('div', {
                      className: 'chat_row you_message',
                      children: Object(m.jsx)('div', { className: 'loader' }),
                    }),
                ],
              }),
            }),
            Object(m.jsx)('div', {
              className: 'show_media',
              style: { display: v.length > 0 ? 'grid' : 'none' },
              children: v.map((e, t) =>
                Object(m.jsxs)(
                  'div',
                  {
                    id: 'file_media',
                    children: [
                      e.type.match(/video/i)
                        ? Object(b.b)(URL.createObjectURL(e), s)
                        : Object(b.a)(URL.createObjectURL(e), s),
                      Object(m.jsx)('span', {
                        onClick: () =>
                          ((e) => {
                            const t = [...v];
                            t.splice(e, 1), N(t);
                          })(t),
                        children: '\xd7',
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
            Object(m.jsxs)('form', {
              className: 'chat_input',
              onSubmit: async (t) => {
                if ((t.preventDefault(), !y.trim() && 0 === v.length)) return;
                g(''), N([]), w(!0);
                let s = [];
                v.length > 0 && (s = await Object(j.b)(v));
                const a = { sender: e.user._id, recipient: p, text: y, media: s, createdAt: new Date().toISOString() };
                w(!1),
                  await O(Object(d.b)({ msg: a, auth: e, socket: c })),
                  E.current && E.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
              },
              children: [
                Object(m.jsx)('input', {
                  type: 'text',
                  placeholder: 'Nh\u1eadp tin nh\u1eafn c\u1ee7a b\u1ea1n...',
                  value: y,
                  onChange: (e) => g(e.target.value),
                  style: {
                    filter: s ? 'invert(1)' : 'invert(0)',
                    background: s ? '#040404' : '',
                    color: s ? 'white' : '',
                  },
                }),
                Object(m.jsx)(a.a, { setContent: g, content: y, theme: s }),
                Object(m.jsxs)('div', {
                  className: 'file_upload',
                  children: [
                    Object(m.jsx)('i', { className: 'fas fa-image text-danger' }),
                    Object(m.jsx)('input', {
                      type: 'file',
                      name: 'file',
                      id: 'file',
                      multiple: !0,
                      accept: 'image/*,video/*',
                      onChange: (e) => {
                        const t = [...e.target.files];
                        let s = '';
                        const c = [];
                        t.forEach(
                          (e) => (
                            e || (s = 'File does not exist.'),
                            e.size > 5242880 && (s = 'The image/video largest is 5mb.'),
                            c.push(e)
                          )
                        ),
                          s && O({ type: o.c.ALERT, payload: { error: s } }),
                          N([...v, ...c]);
                      },
                    }),
                  ],
                }),
                Object(m.jsx)('button', {
                  type: 'submit',
                  className: 'material-icons',
                  disabled: !(y || v.length > 0),
                  children: 'near_me',
                }),
              ],
            }),
          ],
        });
      };
      t.default = function () {
        return Object(m.jsxs)('div', {
          className: 'message d-flex mess_detail',
          children: [
            Object(m.jsx)('div', { className: 'col col-md-3 border-end left', children: Object(m.jsx)(c.a, {}) }),
            Object(m.jsx)('div', { className: 'col col-md-9 right', children: Object(m.jsx)(O, {}) }),
          ],
        });
      };
    },
    8: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return n;
      }),
        s.d(t, 'b', function () {
          return l;
        }),
        s.d(t, 'e', function () {
          return r;
        }),
        s.d(t, 'f', function () {
          return i;
        }),
        s.d(t, 'g', function () {
          return o;
        }),
        s.d(t, 'd', function () {
          return d;
        }),
        s.d(t, 'c', function () {
          return j;
        });
      var c = s(4),
        a = s(2);
      const n = {
          ADD_USER: 'ADD_USER',
          ADD_MESSAGE: 'ADD_MESSAGE',
          GET_CONVERSATIONS: 'GET_CONVERSATIONS',
          GET_MESSAGES: 'GET_MESSAGES',
          UPDATE_MESSAGES: 'UPDATE_MESSAGES',
          DELETE_MESSAGES: 'DELETE_MESSAGES',
          DELETE_CONVERSATION: 'DELETE_CONVERSATION',
          CHECK_ONLINE_OFFLINE: 'CHECK_ONLINE_OFFLINE',
        },
        l = (e) => async (t) => {
          const { msg: s, auth: l, socket: r } = e;
          t({ type: n.ADD_MESSAGE, payload: s });
          const { _id: i, avatar: o, fullname: d, username: j } = l.user;
          r.emit('addMessage', { ...s, user: { _id: i, avatar: o, fullname: d, username: j } });
          try {
            await Object(c.d)('message', s, l.token);
          } catch (b) {
            t({ type: a.c.ALERT, payload: { error: b.response.data.msg } });
          }
        },
        r = (e) => async (t) => {
          const { auth: s, page: l = 1 } = e;
          try {
            const e = await Object(c.b)('conversations?limit='.concat(9 * l), s.token),
              a = [];
            e.data.conversations.forEach((e) => {
              e.recipients.forEach((t) => {
                t._id !== s.user._id && a.push({ ...t, text: e.text, media: e.media, call: e.call });
              });
            }),
              t({ type: n.GET_CONVERSATIONS, payload: { newArr: a, result: e.data.result } });
          } catch (r) {
            t({ type: a.c.ALERT, payload: { error: r.response.data.msg } });
          }
        },
        i = (e) => async (t) => {
          const { auth: s, id: l, page: r = 1 } = e;
          try {
            const e = await Object(c.b)('message/'.concat(l, '?limit=').concat(9 * r), s.token),
              a = { ...e.data, messages: e.data.messages.reverse() };
            t({ type: n.GET_MESSAGES, payload: { ...a, _id: l, page: r } });
          } catch (i) {
            t({ type: a.c.ALERT, payload: { error: i.response.data.msg } });
          }
        },
        o = (e) => async (t) => {
          const { auth: s, id: l, page: r = 1 } = e;
          try {
            const e = await Object(c.b)('message/'.concat(l, '?limit=').concat(9 * r), s.token),
              a = { ...e.data, messages: e.data.messages.reverse() };
            t({ type: n.UPDATE_MESSAGES, payload: { ...a, _id: l, page: r } });
          } catch (i) {
            t({ type: a.c.ALERT, payload: { error: i.response.data.msg } });
          }
        },
        d = (e) => async (t) => {
          const { msg: s, auth: l, data: r } = e,
            i = Object(a.a)(r, s._id);
          t({ type: n.DELETE_MESSAGES, payload: { newData: i, _id: s.recipient } });
          try {
            await Object(c.a)('message/'.concat(s._id), l.token);
          } catch (o) {
            t({ type: a.c.ALERT, payload: { error: o.response.data.msg } });
          }
        },
        j = (e) => async (t) => {
          const { auth: s, id: l } = e;
          t({ type: n.DELETE_CONVERSATION, payload: l });
          try {
            await Object(c.a)('conversation/'.concat(l), s.token);
          } catch (r) {
            t({ type: a.c.ALERT, payload: { error: r.response.data.msg } });
          }
        };
    },
    9: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return n;
      }),
        s.d(t, 'b', function () {
          return l;
        }),
        s.d(t, 'f', function () {
          return r;
        }),
        s.d(t, 'd', function () {
          return i;
        }),
        s.d(t, 'e', function () {
          return o;
        }),
        s.d(t, 'c', function () {
          return d;
        });
      var c = s(4),
        a = s(2);
      const n = {
          GET_NOTIFIES: 'GET_NOTIFIES',
          CREATE_NOTIFY: 'CREATE_NOTIFY',
          REMOVE_NOTIFY: 'REMOVE_NOTIFY',
          UPDATE_NOTIFY: 'UPDATE_NOTIFY',
          UPDATE_SOUND: 'UPDATE_SOUND',
          DELETE_ALL_NOTIFIES: 'DELETE_ALL_NOTIFIES',
        },
        l = (e) => async (t) => {
          const { auth: s, msg: n, socket: l } = e;
          try {
            const e = await Object(c.d)('notify', n, s.token);
            l.emit('createNotify', { ...e.data.notify, user: { fullname: s.user.fullname, avatar: s.user.avatar } });
          } catch (r) {
            t({ type: a.c.ALERT, payload: { error: r.response.data.msg } });
          }
        },
        r = (e) => async (t) => {
          const { auth: s, msg: n, socket: l } = e;
          try {
            await Object(c.a)('notify/'.concat(n.id, '?url=').concat(n.url), s.token), l.emit('removeNotify', n);
          } catch (r) {
            t({ type: a.c.ALERT, payload: { error: r.response.data.msg } });
          }
        },
        i = (e) => async (t) => {
          try {
            const s = await Object(c.b)('notifies', e);
            t({ type: n.GET_NOTIFIES, payload: s.data.notifies });
          } catch (s) {
            t({ type: a.c.ALERT, payload: { error: s.response.data.msg } });
          }
        },
        o = (e) => async (t) => {
          const { msg: s, auth: l } = e;
          t({ type: n.UPDATE_NOTIFY, payload: { ...s, isRead: !0 } });
          try {
            await Object(c.c)('/isReadNotify/'.concat(s._id), null, l.token);
          } catch (r) {
            t({ type: a.c.ALERT, payload: { error: r.response.data.msg } });
          }
        },
        d = (e) => async (t) => {
          t({ type: n.DELETE_ALL_NOTIFIES, payload: [] });
          try {
            await Object(c.a)('deleteAllNotify', e);
          } catch (s) {
            t({ type: a.c.ALERT, payload: { error: s.response.data.msg } });
          }
        };
    },
  },
  [[144, 1, 2]],
]);
//# sourceMappingURL=main.2a27dce5.chunk.js.map
