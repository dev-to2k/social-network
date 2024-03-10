(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    106: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return p;
        });
      var c = n(4),
        a = n.n(c),
        r = n(7),
        s = n(6),
        i = n(44),
        o = n(45),
        l = n(17),
        u = n(1),
        d = n(5),
        j = n(70),
        b = n(9),
        m = n(0);
      function p() {
        var e = Object(o.a)(function () {
            setTimeout(function () {
              x();
            }, 1e3);
          }),
          t = Object(s.a)(e, 2),
          n = t[0],
          c = t[1],
          p = Object(d.c)(function (e) {
            return e;
          }),
          f = p.auth,
          O = p.discover,
          h = Object(d.b)();
        Object(u.useEffect)(
          function () {
            O.firstLoad || h(Object(j.getDiscoverPosts)(f.token));
          },
          [f.token, h, O.firstLoad]
        );
        var x = (function () {
          var e = Object(r.a)(
            a.a.mark(function e() {
              var t;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return c(!0), (e.next = 3), Object(b.b)('post_discover?num='.concat(3 * O.page), f.token);
                    case 3:
                      (t = e.sent), h({ type: j.DISCOVER_TYPES.UPDATE_POST, payload: t.data }), c(!1);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return Object(m.jsx)('div', {
          className: 'discover',
          children: Object(m.jsx)('div', {
            className: 'container-fluid pt-5',
            children: Object(m.jsxs)('div', {
              className: 'width-905 mx-auto',
              children: [
                Object(m.jsxs)('div', {
                  className:
                    'rounded-3 p-3 shadow mb-4 bg-white d-flex align-items-center justify-content-between border',
                  children: [
                    Object(m.jsx)('span', { className: 'fw-600 fs-4', children: 'Kh\xe1m ph\xe1 b\xe0i vi\u1ebft.' }),
                    Object(m.jsx)('i', { className: 'far fa-list-alt fs-4' }),
                  ],
                }),
                O.loading
                  ? Object(m.jsx)('img', { src: l.a, alt: 'loading' })
                  : Object(m.jsx)(i.a, { posts: O.posts, result: O.result }),
                n && Object(m.jsx)('img', { src: l.a, alt: 'loading' }),
              ],
            }),
          }),
        });
      }
    },
    12: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return j;
      }),
        n.d(t, 'b', function () {
          return b;
        }),
        n.d(t, 'e', function () {
          return m;
        }),
        n.d(t, 'j', function () {
          return p;
        }),
        n.d(t, 'f', function () {
          return f;
        }),
        n.d(t, 'h', function () {
          return O;
        }),
        n.d(t, 'd', function () {
          return h;
        }),
        n.d(t, 'c', function () {
          return x;
        }),
        n.d(t, 'g', function () {
          return v;
        }),
        n.d(t, 'i', function () {
          return g;
        });
      var c = n(11),
        a = n(4),
        r = n.n(a),
        s = n(2),
        i = n(7),
        o = n(9),
        l = n(31),
        u = n(3),
        d = n(14),
        j = {
          CREATE_POST: 'CREATE_POST',
          LOADING_POST: 'LOADING_POST',
          GET_POSTS: 'GET_POSTS',
          UPDATE_POST: 'UPDATE_POST',
          GET_POST: 'GET_POST',
          DELETE_POST: 'DELETE_POST',
        },
        b = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, i, b, m, p, f;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((c = e.content),
                            (a = e.images),
                            (i = e.auth),
                            (b = e.socket),
                            (m = []),
                            (t.prev = 2),
                            n({ type: u.c.ALERT, payload: { loading: !0 } }),
                            !(a.length > 0))
                          ) {
                            t.next = 8;
                            break;
                          }
                          return (t.next = 7), Object(l.b)(a);
                        case 7:
                          m = t.sent;
                        case 8:
                          return (t.next = 10), Object(o.d)('posts', { content: c, images: m }, i.token);
                        case 10:
                          (p = t.sent),
                            n({
                              type: j.CREATE_POST,
                              payload: Object(s.a)(Object(s.a)({}, p.data.newPost), {}, { user: i.user }),
                            }),
                            n({ type: u.c.ALERT, payload: { loading: !1 } }),
                            (f = {
                              id: p.data.newPost._id,
                              text: '\u0111\xe3 th\xeam m\u1ed9t b\xe0i vi\u1ebft',
                              recipients: p.data.newPost.user.followers,
                              url: '/post/'.concat(p.data.newPost._id),
                              content: c,
                              image: m[0].url,
                            }),
                            n(Object(d.b)({ auth: i, msg: f, socket: b })),
                            (t.next = 20);
                          break;
                        case 17:
                          (t.prev = 17),
                            (t.t0 = t.catch(2)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.respone.data.msg } });
                        case 20:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 17]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        m = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            n({ type: j.LOADING_POST, payload: !0 }),
                            (t.next = 4),
                            Object(o.b)('posts', e)
                          );
                        case 4:
                          (c = t.sent),
                            n({ type: j.GET_POSTS, payload: Object(s.a)(Object(s.a)({}, c.data), {}, { page: 2 }) }),
                            n({ type: j.LOADING_POST, payload: !1 }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.respone.data.msg } });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        p = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var a, s, i, d, b, m, p, f;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((a = e.content),
                            (s = e.images),
                            (i = e.auth),
                            (d = e.status),
                            (b = []),
                            (m = s.filter(function (e) {
                              return !e.url;
                            })),
                            (p = s.filter(function (e) {
                              return e.url;
                            })),
                            d.content !== a || 0 !== m.length || p.length !== d.images.length)
                          ) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return');
                        case 6:
                          if (((t.prev = 6), n({ type: u.c.ALERT, payload: { loading: !0 } }), !(m.length > 0))) {
                            t.next = 12;
                            break;
                          }
                          return (t.next = 11), Object(l.b)(m);
                        case 11:
                          b = t.sent;
                        case 12:
                          return (
                            (t.next = 14),
                            Object(o.c)(
                              'post/'.concat(d._id),
                              { content: a, images: [].concat(Object(c.a)(p), Object(c.a)(b)) },
                              i.token
                            )
                          );
                        case 14:
                          (f = t.sent),
                            n({ type: j.UPDATE_POST, payload: f.data.newPost }),
                            n({ type: u.c.ALERT, payload: { success: f.data.msg } }),
                            (t.next = 22);
                          break;
                        case 19:
                          (t.prev = 19),
                            (t.t0 = t.catch(6)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.respone.data.msg } });
                        case 22:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 19]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        f = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var a, i, l, b, m;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = e.auth),
                            (i = e.post),
                            (l = e.socket),
                            (b = Object(s.a)(
                              Object(s.a)({}, i),
                              {},
                              { likes: [].concat(Object(c.a)(i.likes), [a.user]) }
                            )),
                            n({ type: j.UPDATE_POST, payload: b }),
                            l.emit('likePost', b),
                            (t.prev = 4),
                            (t.next = 7),
                            Object(o.c)('post/'.concat(i._id, '/like'), null, a.token)
                          );
                        case 7:
                          (m = {
                            id: a.user._id,
                            text: '\u0111\xe3 th\xedch b\xe0i vi\u1ebft c\u1ee7a b\u1ea1n',
                            recipients: [i.user._id],
                            url: '/post/'.concat(i._id),
                            content: i.content,
                            image: i.images[0].url,
                          }),
                            n(Object(d.b)({ auth: a, msg: m, socket: l })),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(4)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        O = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, i, l, b;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (a = e.post),
                            (i = e.socket),
                            (l = Object(s.a)(
                              Object(s.a)({}, a),
                              {},
                              {
                                likes: a.likes.filter(function (e) {
                                  return e._id !== c.user._id;
                                }),
                              }
                            )),
                            n({ type: j.UPDATE_POST, payload: l }),
                            i.emit('unLikePost', l),
                            (t.prev = 4),
                            (t.next = 7),
                            Object(o.c)('post/'.concat(a._id, '/unlike'), null, c.token)
                          );
                        case 7:
                          (b = {
                            id: c.user._id,
                            text: '\u0111\xe3 th\xedch b\xe0i vi\u1ebft c\u1ee7a b\u1ea1n',
                            recipients: [a.user._id],
                            url: '/post/'.concat(a._id),
                          }),
                            n(Object(d.f)({ auth: c, msg: b, socket: i })),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(4)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        h = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, s, i;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((c = e.auth),
                            (a = e.postDetails),
                            (s = e.id),
                            !a.every(function (e) {
                              return e._id !== s;
                            }))
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (t.prev = 2), (t.next = 5), Object(o.b)('post/'.concat(s), c.token);
                        case 5:
                          (i = t.sent), n({ type: j.GET_POST, payload: i.data.postDetails }), (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(2)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        x = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, s, i, l;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (a = e.post),
                            (s = e.socket),
                            n({ type: j.DELETE_POST, payload: a }),
                            (t.prev = 2),
                            (t.next = 5),
                            Object(o.a)('post/'.concat(a._id), c.token)
                          );
                        case 5:
                          (i = t.sent),
                            (l = {
                              id: a._id,
                              text: 'added a new post',
                              recipients: i.data.newPost.user.followers,
                              url: '/post/'.concat(a._id),
                            }),
                            n(Object(d.f)({ auth: c, msg: l, socket: s })),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(2)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        v = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var a, i, l;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = e.post),
                            (i = e.auth),
                            (l = Object(s.a)(
                              Object(s.a)({}, i.user),
                              {},
                              { saved: [].concat(Object(c.a)(i.user.saved), [a._id]) }
                            )),
                            n({ type: u.c.AUTH, payload: Object(s.a)(Object(s.a)({}, i), {}, { user: l }) }),
                            (t.prev = 3),
                            (t.next = 6),
                            Object(o.c)('savePost/'.concat(a._id), null, i.token)
                          );
                        case 6:
                          t.next = 11;
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(3)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 11:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        g = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, i;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.post),
                            (a = e.auth),
                            (i = Object(s.a)(
                              Object(s.a)({}, a.user),
                              {},
                              {
                                saved: a.user.saved.filter(function (e) {
                                  return e !== c._id;
                                }),
                              }
                            )),
                            n({ type: u.c.AUTH, payload: Object(s.a)(Object(s.a)({}, a), {}, { user: i }) }),
                            (t.prev = 3),
                            (t.next = 6),
                            Object(o.c)('unSavePost/'.concat(c._id), null, a.token)
                          );
                        case 6:
                          t.next = 11;
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(3)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 11:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
    },
    123: function (e, t, n) {
      'use strict';
      n.r(t);
      var c = n(6),
        a = n(72),
        r = n(17),
        s = n(1),
        i = n(5),
        o = n(16),
        l = n(12),
        u = n(0);
      t.default = function () {
        var e = Object(s.useState)([]),
          t = Object(c.a)(e, 2),
          n = t[0],
          d = t[1],
          j = Object(o.g)().id,
          b = Object(i.c)(function (e) {
            return e;
          }),
          m = b.auth,
          p = b.postDetails,
          f = Object(i.b)();
        return (
          Object(s.useEffect)(
            function () {
              if ((f(Object(l.d)({ auth: m, postDetails: p, id: j })), p.length > 0)) {
                var e = p.filter(function (e) {
                  return e._id === j;
                });
                d(e);
              }
            },
            [p, j, m, f]
          ),
          Object(u.jsxs)('div', {
            className: 'post-details width-682 mx-auto mt-4 mb-5',
            children: [
              0 === n.length && Object(u.jsx)('img', { src: r.a, alt: 'loading' }),
              n.map(function (e) {
                return Object(u.jsx)(a.a, { post: e }, e._id);
              }),
            ],
          })
        );
      };
    },
    125: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return L;
        });
      var c = n(6),
        a = n(17),
        r = n(1),
        s = n(5),
        i = n(3),
        o = n(18),
        l = n(31),
        u = n(0);
      function d(e) {
        var t = e.setFormChangeAvatar,
          n = Object(r.useState)(''),
          a = Object(c.a)(n, 2),
          d = a[0],
          j = a[1],
          b = Object(s.c)(function (e) {
            return e;
          }).auth,
          m = Object(s.b)();
        return Object(u.jsx)('div', {
          className: 'change_avatar',
          children: Object(u.jsxs)('form', {
            className: 'shadow rounded-3',
            onSubmit: function (e) {
              e.preventDefault(), m(Object(o.e)({ avatar: d, auth: b })), t(!1);
            },
            children: [
              Object(u.jsx)('div', {
                className: 'd-flex align-items-center justify-content-end',
                children: Object(u.jsx)('button', {
                  type: 'button',
                  className: 'btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center',
                  onClick: function () {
                    return t(!1);
                  },
                  children: Object(u.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                }),
              }),
              Object(u.jsxs)('div', {
                className: 'avatar d-flex flex-column align-items-center',
                children: [
                  Object(u.jsx)('div', {
                    className: 'block-avatar mb-3',
                    children: Object(u.jsx)('img', {
                      src: d ? URL.createObjectURL(d) : b.user.avatar,
                      className: 'img-fluid w-100',
                      alt: '',
                    }),
                  }),
                  Object(u.jsxs)('label', {
                    htmlFor: 'file_up',
                    className: 'rounded-3 fw-bold',
                    children: [
                      Object(u.jsx)('span', { className: 'material-icons-outlined me-2', children: 'add_a_photo' }),
                      'T\u1ea3i \u1ea3nh l\xean',
                      Object(u.jsx)('input', {
                        type: 'file',
                        name: 'file',
                        id: 'file_up',
                        accept: 'image/*',
                        onChange: function (e) {
                          var t = e.target.files[0],
                            n = Object(l.a)(t);
                          n && m({ type: i.c.ALERT, payload: { error: n } }), j(t);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              Object(u.jsxs)('div', {
                className: 'row',
                children: [
                  Object(u.jsx)('div', {
                    className: 'col-lg-6 d-flex align-items-center justify-content-start',
                    children: Object(u.jsx)('span', {
                      className: 'text-primary fw-bold',
                      children: 'Thay \u0111\u1ed5i avatar',
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'col-lg-6 text-end',
                    children: Object(u.jsx)('button', {
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
      var j = n(36),
        b = n(24);
      var m = function (e) {
        var t = e.users,
          n = e.setShowFollowers,
          c = Object(s.c)(function (e) {
            return e;
          }).auth;
        return Object(u.jsx)('div', {
          className: 'follow',
          children: Object(u.jsxs)('div', {
            className: 'follow_block p-3 shadow',
            children: [
              Object(u.jsxs)('div', {
                className: 'd-flex justify-content-center align-items-center',
                children: [
                  Object(u.jsx)('h4', { className: 'mb-0', children: 'Ng\u01b0\u1eddi theo d\xf5i' }),
                  Object(u.jsx)('button', {
                    className:
                      'btn btn-edit rounded-circle circle d-flex align-items-center justify-content-center position-absolute',
                    style: { right: '1rem' },
                    type: 'button',
                    onClick: function () {
                      return n(!1);
                    },
                    children: Object(u.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                  }),
                ],
              }),
              Object(u.jsx)('hr', {}),
              Object(u.jsx)('ul', {
                children: t.map(function (e) {
                  return Object(u.jsxs)(
                    'li',
                    {
                      className: 'rounded-2 d-flex justify-content-between',
                      children: [
                        Object(u.jsx)(b.a, { user: e, setShowFollowers: n }),
                        Object(u.jsx)('div', {
                          className: 'p-3',
                          children: c.user._id !== e._id && Object(u.jsx)(j.a, { user: e }),
                        }),
                      ],
                    },
                    e._id
                  );
                }),
              }),
            ],
          }),
        });
      };
      var p = function (e) {
          var t = e.users,
            n = e.setShowFollowing,
            c = Object(s.c)(function (e) {
              return e;
            }).auth;
          return Object(u.jsx)('div', {
            className: 'follow',
            children: Object(u.jsxs)('div', {
              className: 'follow_block p-3 shadow',
              children: [
                Object(u.jsxs)('div', {
                  className: 'd-flex justify-content-center align-items-center',
                  children: [
                    Object(u.jsx)('h4', { className: 'mb-0', children: '\u0110ang theo d\xf5i' }),
                    Object(u.jsx)('button', {
                      className:
                        'btn btn-edit rounded-circle circle d-flex align-items-center justify-content-center position-absolute',
                      style: { right: '1rem' },
                      type: 'button',
                      onClick: function () {
                        return n(!1);
                      },
                      children: Object(u.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                    }),
                  ],
                }),
                Object(u.jsx)('hr', {}),
                Object(u.jsx)('ul', {
                  children: t.map(function (e) {
                    return Object(u.jsxs)(
                      'li',
                      {
                        className: 'rounded-2 d-flex justify-content-between',
                        children: [
                          Object(u.jsx)(b.a, { user: e, setShowFollowing: n }),
                          Object(u.jsx)('div', {
                            className: 'p-3',
                            children: c.user._id !== e._id && Object(u.jsx)(j.a, { user: e }),
                          }),
                        ],
                      },
                      e._id
                    );
                  }),
                }),
              ],
            }),
          });
        },
        f = n(33),
        O = n(2);
      function h(e) {
        var t = e.user,
          n = e.setOnEdit,
          a = Object(r.useState)({ fullname: '', mobile: '', address: '', website: '', story: '', gender: '' }),
          i = Object(c.a)(a, 2),
          l = i[0],
          d = i[1],
          j = l.fullname,
          b = l.mobile,
          m = l.address,
          p = l.website,
          h = l.story,
          x = l.gender,
          v = Object(s.c)(function (e) {
            return e;
          }).auth,
          g = Object(s.b)();
        Object(r.useEffect)(
          function () {
            d(t);
          },
          [t]
        );
        var y = function (e) {
          var t = e.target,
            n = t.name,
            c = t.value;
          d(Object(O.a)(Object(O.a)({}, l), {}, Object(f.a)({}, n, c)));
        };
        return Object(u.jsx)('div', {
          className: 'edit_profile',
          children: Object(u.jsxs)('form', {
            className: 'rounded-3 shadow',
            onSubmit: function (e) {
              e.preventDefault(), g(Object(o.f)({ userData: l, auth: v })), n(!1);
            },
            children: [
              Object(u.jsxs)('div', {
                className: 'info_avatar mb-3',
                children: [
                  Object(u.jsxs)('div', {
                    className: 'position-relative d-flex align-items-center justify-content-center',
                    children: [
                      Object(u.jsx)('h4', { children: 'Ch\u1ec9nh s\u1eeda chi ti\u1ebft' }),
                      Object(u.jsx)('button', {
                        className:
                          'btn btn-edit position-absolute rounded-circle d-flex justify-content-center align-items-center',
                        style: { top: '0', right: '0', width: '36px', height: '36px' },
                        type: 'button',
                        onClick: function () {
                          return n(!1);
                        },
                        children: Object(u.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                      }),
                    ],
                  }),
                  Object(u.jsx)('hr', {}),
                  Object(u.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(u.jsxs)('label', {
                      htmlFor: 'fullname',
                      children: [
                        'H\u1ecd v\xe0 t\xean',
                        ' ',
                        Object(u.jsxs)('div', {
                          className: 'position-relative',
                          children: [
                            Object(u.jsx)('input', {
                              type: 'text',
                              className: 'form-control',
                              id: 'fullname',
                              name: 'fullname',
                              value: j,
                              onChange: y,
                            }),
                            Object(u.jsxs)('small', {
                              className: 'position-absolute text-danger',
                              style: { top: '50%', right: '5px', transform: 'translateY(-50%)' },
                              children: [j.length, '/25'],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(u.jsxs)('label', {
                      htmlFor: 'mobile',
                      children: [
                        'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                        ' ',
                        Object(u.jsx)('input', {
                          type: 'text',
                          className: 'form-control',
                          id: 'mobile',
                          name: 'mobile',
                          value: b,
                          onChange: y,
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(u.jsxs)('label', {
                      htmlFor: 'address',
                      children: [
                        '\u0110\u1ecba ch\u1ec9',
                        ' ',
                        Object(u.jsx)('input', {
                          type: 'text',
                          className: 'form-control',
                          id: 'address',
                          name: 'address',
                          value: m,
                          onChange: y,
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(u.jsxs)('label', {
                      htmlFor: 'website',
                      children: [
                        'Website',
                        ' ',
                        Object(u.jsx)('input', {
                          type: 'text',
                          className: 'form-control',
                          id: 'website',
                          name: 'website',
                          value: p,
                          onChange: y,
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'form-group mb-3',
                    children: Object(u.jsxs)('label', {
                      htmlFor: 'story',
                      children: [
                        'C\xe2u chuy\u1ec7n',
                        ' ',
                        Object(u.jsxs)('div', {
                          className: 'position-relative',
                          children: [
                            Object(u.jsx)('textarea', {
                              className: 'form-control',
                              id: 'story',
                              name: 'story',
                              value: h,
                              onChange: y,
                            }),
                            Object(u.jsxs)('small', {
                              className: 'text-danger d-block text-end',
                              children: [h.length, '/200'],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsxs)('label', {
                    htmlFor: 'gender',
                    children: [
                      'Gi\u1edbi t\xednh',
                      ' ',
                      Object(u.jsx)('div', {
                        className: 'input-group-prepend',
                        children: Object(u.jsxs)('select', {
                          name: 'gender',
                          id: 'gender',
                          value: x,
                          onChange: y,
                          className: 'form-select',
                          children: [
                            Object(u.jsx)('option', { value: 'male', children: 'Nam' }),
                            Object(u.jsx)('option', { value: 'female', children: 'N\u1eef' }),
                            Object(u.jsx)('option', { value: 'other', children: 'Kh\xe1c' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(u.jsxs)('div', {
                className: 'row',
                children: [
                  Object(u.jsx)('div', { className: 'col-lg-6' }),
                  Object(u.jsxs)('div', {
                    className: 'col-lg-6 text-end',
                    children: [
                      Object(u.jsx)('button', { type: 'reset', className: 'btn btn-edit', children: 'Hu\u1ef7' }),
                      Object(u.jsx)('button', {
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
      var x = n(4),
        v = n.n(x),
        g = n(7),
        y = n(44),
        N = n(45),
        w = n(9);
      function _(e) {
        var t = e.auth,
          n = e.profile,
          s = e.dispatch,
          i = e.id,
          l = Object(r.useState)([]),
          d = Object(c.a)(l, 2),
          j = d[0],
          b = d[1],
          m = Object(r.useState)(0),
          p = Object(c.a)(m, 2),
          f = p[0],
          h = p[1],
          x = Object(N.a)(function () {
            setTimeout(function () {
              T();
            }, 1e3);
          }),
          _ = Object(c.a)(x, 2),
          k = _[0],
          E = _[1];
        Object(r.useEffect)(
          function () {
            n.userPosts.forEach(function (e) {
              e._id === i && (b(e.posts), h(e.page));
            });
          },
          [n.userPosts, i]
        );
        var T = (function () {
          var e = Object(g.a)(
            v.a.mark(function e() {
              var n, c;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        E(!0), (e.next = 3), Object(w.b)('user_posts/'.concat(i, '?limit=').concat(9 * f), t.token)
                      );
                    case 3:
                      (n = e.sent),
                        (c = Object(O.a)(Object(O.a)({}, n.data), {}, { page: f + 1, _id: i })),
                        s({ type: o.a.UPDATE_POST, payload: c }),
                        E(!1);
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return Object(u.jsxs)(u.Fragment, {
          children: [Object(u.jsx)(y.a, { posts: j }), k && Object(u.jsx)('img', { src: a.a, alt: 'loading' })],
        });
      }
      var k = function (e) {
        var t = e.result,
          n = e.page,
          c = e.load,
          a = e.handleLoadMore;
        return Object(u.jsx)(u.Fragment, {
          children:
            t < 9 * (n - 1)
              ? ''
              : !c &&
                Object(u.jsx)('button', {
                  type: 'button',
                  className: 'btn btn-primary d-block mx-auto mb-3',
                  onClick: a,
                  children: 'Load more',
                }),
        });
      };
      var E = function (e) {
        var t = e.auth,
          n = e.dispatch,
          s = Object(r.useState)([]),
          o = Object(c.a)(s, 2),
          l = o[0],
          d = o[1],
          j = Object(r.useState)(9),
          b = Object(c.a)(j, 2),
          m = b[0],
          p = b[1],
          f = Object(r.useState)(2),
          O = Object(c.a)(f, 2),
          h = O[0],
          x = O[1],
          N = Object(r.useState)(!1),
          _ = Object(c.a)(N, 2),
          E = _[0],
          T = _[1];
        Object(r.useEffect)(
          function () {
            return (
              T(!0),
              Object(w.b)('getSavePosts', t.token)
                .then(function (e) {
                  d(e.data.savePosts), p(e.data.result), T(!1);
                })
                .catch(function (e) {
                  n({ type: i.c.ALERT, payload: { error: e.response.data.msg } });
                }),
              function () {
                return d([]);
              }
            );
          },
          [t.token, n]
        );
        var S = (function () {
          var e = Object(g.a)(
            v.a.mark(function e() {
              var n;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return T(!0), (e.next = 3), Object(w.b)('getSavePosts?limit='.concat(9 * h), t.token);
                    case 3:
                      (n = e.sent), d(n.data.savePosts), p(n.data.result), x(h + 1), T(!1);
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return Object(u.jsxs)('div', {
          children: [
            Object(u.jsx)('p', {
              children: Object(u.jsx)('span', { className: 'fs-5 fw-600', children: 'T\u1ea5t c\u1ea3' }),
            }),
            Object(u.jsx)(y.a, { posts: l, result: m }),
            E && Object(u.jsx)('img', { src: a.a, alt: 'loading', className: 'd-block mx-auto' }),
            Object(u.jsx)(k, { result: m, page: h, load: E, handleLoadMore: S }),
          ],
        });
      };
      function T(e) {
        var t = e.auth,
          n = e.profile,
          s = e.dispatch,
          i = e.id,
          o = Object(r.useState)([]),
          l = Object(c.a)(o, 2),
          b = l[0],
          f = l[1],
          O = Object(r.useState)(!1),
          x = Object(c.a)(O, 2),
          v = x[0],
          g = x[1],
          y = Object(r.useState)(!1),
          N = Object(c.a)(y, 2),
          w = N[0],
          k = N[1],
          T = Object(r.useState)(!1),
          S = Object(c.a)(T, 2),
          L = S[0],
          A = S[1],
          C = Object(r.useState)(!1),
          P = Object(c.a)(C, 2),
          D = P[0],
          R = P[1],
          I = Object(r.useState)(!1),
          U = Object(c.a)(I, 2),
          F = U[0],
          G = U[1];
        return (
          Object(r.useEffect)(
            function () {
              if (i === t.user._id) f([t.user]);
              else {
                var e = n.users.filter(function (e) {
                  return e._id === i;
                });
                f(e);
              }
            },
            [i, t.user, n.users]
          ),
          Object(u.jsx)('div', {
            className: 'info',
            children: b.map(function (e) {
              return Object(u.jsxs)(
                'div',
                {
                  className: 'info__container',
                  children: [
                    Object(u.jsxs)('div', {
                      className: 'info__content w-100',
                      children: [
                        Object(u.jsx)('div', {
                          className: 'info__content__title bg-white shadow-sm',
                          children: Object(u.jsxs)('div', {
                            className: 'container px-0',
                            children: [
                              Object(u.jsxs)('div', {
                                className: 'position-relative edit-avatar mb-3',
                                children: [
                                  Object(u.jsx)('div', {
                                    className: 'block-avatar',
                                    children: Object(u.jsx)('img', {
                                      src: e.avatar,
                                      width: '168',
                                      className: 'img-fluid',
                                      alt: 'avatar',
                                    }),
                                  }),
                                  e._id === t.user._id
                                    ? Object(u.jsx)('button', {
                                        type: 'button',
                                        className:
                                          'btn btn-edit d-flex justify-content-center align-items-center rounded-circle circle',
                                        onClick: function () {
                                          return k(!0);
                                        },
                                        children: Object(u.jsx)('span', {
                                          className: 'material-icons',
                                          children: 'photo_camera',
                                        }),
                                      })
                                    : '',
                                ],
                              }),
                              w && Object(u.jsx)(d, { user: e, setFormChangeAvatar: k }),
                              Object(u.jsxs)('div', {
                                className: 'container-fluid mw-878',
                                children: [
                                  Object(u.jsx)('h1', { children: e.fullname }),
                                  Object(u.jsx)('hr', { className: 'mb-0' }),
                                  Object(u.jsxs)('div', {
                                    className: 'row mx-auto fs-14 py-2',
                                    children: [
                                      Object(u.jsx)('div', {
                                        className: 'col col-lg-6 col-md-6 col-sm-12 ps-0 d-none d-sm-block',
                                        children:
                                          t.user._id === i &&
                                          Object(u.jsxs)('ul', {
                                            className: 'tab align-items-center mb-0',
                                            children: [
                                              Object(u.jsx)('button', {
                                                type: 'button',
                                                className: F ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2',
                                                onClick: function () {
                                                  return G(!1);
                                                },
                                                children: Object(u.jsx)('span', { children: ' B\xe0i vi\u1ebft' }),
                                              }),
                                              Object(u.jsx)('button', {
                                                type: 'button',
                                                className: F ? 'btn btn-outline-primary' : 'btn btn-primary',
                                                onClick: function () {
                                                  return G(!0);
                                                },
                                                children: Object(u.jsx)('span', {
                                                  children: 'B\xe0i vi\u1ebft \u0111\xe3 l\u01b0u',
                                                }),
                                              }),
                                            ],
                                          }),
                                      }),
                                      Object(u.jsx)('div', {
                                        className: 'col col-lg-6 col-md-6 col-sm-12 pe-0 setting-profile',
                                        children:
                                          e._id === t.user._id
                                            ? Object(u.jsx)('div', {
                                                className: 'd-flex h-100 align-items-center justify-content-end',
                                                children: Object(u.jsx)('button', {
                                                  type: 'button',
                                                  className: 'btn btn-edit fw-600',
                                                  children: Object(u.jsx)('p', {
                                                    className: 'mb-0 d-flex align-items-end',
                                                    children: Object(u.jsx)('span', {
                                                      className: 'material-icons-outlined',
                                                      children: 'more_horiz',
                                                    }),
                                                  }),
                                                }),
                                              })
                                            : Object(u.jsx)('div', {
                                                className:
                                                  'd-flex h-100 align-items-center justify-content-end profile-follow',
                                                children: Object(u.jsx)(j.a, { user: e }),
                                              }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(u.jsx)('div', {
                          className: 'info__content__body mw-878 container mt-4',
                          children: n.loading
                            ? Object(u.jsx)('img', { className: 'd-block mx-auto', src: a.a, alt: 'loading' })
                            : Object(u.jsx)(u.Fragment, {
                                children: F
                                  ? Object(u.jsx)(E, { auth: t, dispatch: s })
                                  : Object(u.jsxs)('div', {
                                      className: 'row',
                                      children: [
                                        Object(u.jsxs)('div', {
                                          className: 'col-lg-12 col-md-12',
                                          children: [
                                            Object(u.jsxs)('div', {
                                              className: 'rounded-10 bg-white p-3 shadow-sm border',
                                              children: [
                                                Object(u.jsx)('h2', {
                                                  className: 'fw-bold fs-5',
                                                  children: 'Gi\u1edbi thi\u1ec7u',
                                                }),
                                                Object(u.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(u.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'account_circle',
                                                    }),
                                                    Object(u.jsx)('span', { children: e.fullname }),
                                                  ],
                                                }),
                                                Object(u.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(u.jsx)('span', {
                                                      className: 'material-icons-outlined text-secondary me-2',
                                                      children: 'public',
                                                    }),
                                                    Object(u.jsx)('span', { children: e.address }),
                                                  ],
                                                }),
                                                Object(u.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(u.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'contact_mail',
                                                    }),
                                                    Object(u.jsx)('span', { children: e.email }),
                                                  ],
                                                }),
                                                Object(u.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(u.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'people',
                                                    }),
                                                    Object(u.jsxs)('span', {
                                                      children: [
                                                        '\u0110ang theo d\xf5i',
                                                        ' ',
                                                        Object(u.jsx)('strong', {
                                                          role: 'button',
                                                          className: 'hover-underline',
                                                          tabIndex: 0,
                                                          onClick: function () {
                                                            return R(!0);
                                                          },
                                                          onKeyDown: function () {
                                                            return R(!0);
                                                          },
                                                          children: e.following.length,
                                                        }),
                                                        ' ',
                                                        'ng\u01b0\u1eddi',
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(u.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(u.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'rss_feed',
                                                    }),
                                                    Object(u.jsxs)('span', {
                                                      children: [
                                                        'C\xf3',
                                                        ' ',
                                                        Object(u.jsx)('strong', {
                                                          role: 'button',
                                                          className: 'hover-underline',
                                                          tabIndex: 0,
                                                          onClick: function () {
                                                            return A(!0);
                                                          },
                                                          onKeyDown: function () {
                                                            return A(!0);
                                                          },
                                                          children: e.followers.length,
                                                        }),
                                                        ' ',
                                                        'ng\u01b0\u1eddi theo d\xf5i',
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(u.jsx)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: Object(u.jsx)('a', {
                                                    href: e.website,
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    className: 'text-wrap',
                                                    children: e.website,
                                                  }),
                                                }),
                                                Object(u.jsxs)('div', {
                                                  className: 'd-flex mb-3',
                                                  children: [
                                                    Object(u.jsx)('span', {
                                                      className: 'material-icons-outlined me-2 text-secondary',
                                                      children: 'auto_stories',
                                                    }),
                                                    e.story,
                                                  ],
                                                }),
                                                e._id === t.user._id
                                                  ? Object(u.jsx)('button', {
                                                      type: 'button',
                                                      className: 'btn btn-edit fw-600 w-100',
                                                      onClick: function () {
                                                        return g(!0);
                                                      },
                                                      children: 'Ch\u1ec9nh s\u1eeda chi ti\u1ebft',
                                                    })
                                                  : '',
                                                v && Object(u.jsx)(h, { user: e, setOnEdit: g }),
                                              ],
                                            }),
                                            Object(u.jsx)('p', {
                                              className: 'text-center mt-3',
                                              children: 'Thanh Trung - Admin',
                                            }),
                                          ],
                                        }),
                                        Object(u.jsx)('div', { className: 'w-100' }),
                                        Object(u.jsx)('div', {
                                          className: 'col-lg-12 col-md-12',
                                          children: Object(u.jsx)(_, { auth: t, profile: n, dispatch: s, id: i }),
                                        }),
                                      ],
                                    }),
                              }),
                        }),
                      ],
                    }),
                    L && Object(u.jsx)(m, { users: e.followers, setShowFollowers: A }),
                    D && Object(u.jsx)(p, { users: e.following, setShowFollowing: R }),
                  ],
                },
                e._id
              );
            }),
          })
        );
      }
      var S = n(16);
      function L() {
        var e = Object(s.c)(function (e) {
            return e;
          }),
          t = e.profile,
          n = e.auth,
          c = Object(s.b)(),
          i = Object(S.g)().id;
        return (
          Object(r.useEffect)(
            function () {
              t.ids.every(function (e) {
                return e !== i;
              }) && c(Object(o.c)({ users: t.users, id: i, auth: n }));
            },
            [i, t.users, n, c]
          ),
          Object(u.jsx)('div', {
            className: 'profile',
            children: t.loading
              ? Object(u.jsx)('img', { src: a.a, className: 'd-block mx-auto my-5', alt: 'loading' })
              : Object(u.jsx)(T, { auth: n, profile: t, dispatch: c, id: i }),
          })
        );
      }
    },
    126: function (e, t, n) {
      'use strict';
      n.r(t);
      var c = n(71),
        a = n(4),
        r = n.n(a),
        s = n(7),
        i = n(11),
        o = n(6),
        l = n(43),
        u = n(17),
        d = n(1),
        j = n(5),
        b = n(16),
        m = n(10),
        p = n(3),
        f = n(15),
        O = n(31),
        h = n(25),
        x = n(0);
      var v = function (e) {
        var t = e.total;
        return Object(x.jsxs)('div', {
          children: [
            Object(x.jsx)('span', {
              children:
                parseInt(t / 3600, 10).toString().length < 2
                  ? '0'.concat(parseInt(t / 3600, 10))
                  : parseInt(t / 3600, 10),
            }),
            Object(x.jsx)('span', { children: ':' }),
            Object(x.jsx)('span', {
              children:
                parseInt(t / 60, 10).toString().length < 2 ? '0'.concat(parseInt(t / 60, 10)) : parseInt(t / 60, 10),
            }),
            Object(x.jsx)('span', { children: ':' }),
            Object(x.jsx)('span', {
              children: (t % 60).toString().length < 2 ? '0'.concat(t % 60, 's') : ''.concat(t % 60, 's'),
            }),
          ],
        });
      };
      var g = function (e) {
          var t = e.user,
            n = e.msg,
            c = e.data,
            a = Object(j.c)(function (e) {
              return e;
            }).auth,
            r = Object(j.b)();
          return Object(x.jsxs)(x.Fragment, {
            children: [
              Object(x.jsxs)('div', {
                className: 'chat_title',
                style: { display: t._id === a.user._id ? 'none' : 'block' },
                children: [
                  Object(x.jsx)('img', {
                    src: t.avatar,
                    className: 'rounded-circle circle-sm img-cover me-1',
                    alt: 'avatar',
                  }),
                  Object(x.jsx)('span', { className: 'fw-500', children: t.fullname }),
                ],
              }),
              Object(x.jsxs)('div', {
                className: 'you_content',
                children: [
                  t._id === a.user._id &&
                    Object(x.jsx)('button', {
                      type: 'button',
                      onClick: function () {
                        c &&
                          window.confirm('B\u1ea1n c\xf3 mu\u1ed1n thu h\u1ed3i tin nh\u1eafn ch\u1ee9?') &&
                          r(Object(f.d)({ msg: n, data: c, auth: a }));
                      },
                      children: Object(x.jsx)('i', { className: 'fas fa-trash' }),
                    }),
                  Object(x.jsxs)('div', {
                    children: [
                      n.text && Object(x.jsx)('div', { className: 'chat_text', children: n.text }),
                      n.media.map(function (e, t) {
                        return Object(x.jsx)(
                          'div',
                          { children: e.url.match(/video/i) ? Object(h.b)(e.url) : Object(h.a)(e.url) },
                          t
                        );
                      }),
                    ],
                  }),
                  n.call &&
                    Object(x.jsxs)('button', {
                      type: 'button',
                      className: 'btn d-flex align-items-center py-3 btn-edit rounded-10',
                      children: [
                        Object(x.jsx)('span', {
                          className: 'material-icons fw-bold me-1 fs-4',
                          style: { color: 0 === n.call.times ? '#e74c3c' : '#2ecc71' },
                          children:
                            0 === n.call.times
                              ? n.call.video
                                ? 'videocam_off'
                                : 'phone_disabled'
                              : n.call.video
                              ? 'video_camera_front'
                              : 'call',
                        }),
                        Object(x.jsxs)('div', {
                          className: 'text-start',
                          children: [
                            Object(x.jsx)('h6', { children: n.call.video ? 'Video call' : 'Audio Call' }),
                            Object(x.jsx)('small', {
                              children:
                                n.call.times > 0
                                  ? Object(x.jsx)(v, { total: n.call.times })
                                  : new Date(n.call.times).toLocaleTimeString(),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              Object(x.jsx)('div', { className: 'chat_time', children: new Date(n.createdAt).toLocaleString() }),
            ],
          });
        },
        y = function () {
          var e = Object(j.c)(function (e) {
              return e;
            }),
            t = e.auth,
            n = e.message,
            c = e.theme,
            a = e.socket,
            v = e.peer,
            y = Object(j.b)(),
            N = Object(b.g)().id,
            w = Object(d.useState)([]),
            _ = Object(o.a)(w, 2),
            k = _[0],
            E = _[1],
            T = Object(d.useState)(''),
            S = Object(o.a)(T, 2),
            L = S[0],
            A = S[1],
            C = Object(d.useState)([]),
            P = Object(o.a)(C, 2),
            D = P[0],
            R = P[1],
            I = Object(d.useState)(!1),
            U = Object(o.a)(I, 2),
            F = U[0],
            G = U[1],
            M = Object(d.useRef)(),
            H = Object(d.useRef)(),
            K = Object(d.useState)([]),
            V = Object(o.a)(K, 2),
            z = V[0],
            B = V[1],
            Y = Object(d.useState)(9),
            W = Object(o.a)(Y, 2),
            X = W[0],
            q = W[1],
            J = Object(d.useState)(0),
            Z = Object(o.a)(J, 2),
            $ = Z[0],
            Q = Z[1],
            ee = Object(d.useState)(0),
            te = Object(o.a)(ee, 2),
            ne = te[0],
            ce = te[1],
            ae = Object(b.f)();
          Object(d.useEffect)(
            function () {
              var e = n.data.find(function (e) {
                return e._id === N;
              });
              e && (B(e.messages), q(e.result), Q(e.page));
            },
            [n.data, N]
          ),
            Object(d.useEffect)(
              function () {
                if (N && n.users.length > 0) {
                  setTimeout(function () {
                    M.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                  }, 50);
                  var e = n.users.find(function (e) {
                    return e._id === N;
                  });
                  e && E(e);
                }
              },
              [n.users, N]
            );
          var re = (function () {
            var e = Object(s.a)(
              r.a.mark(function e(n) {
                var c, s;
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((n.preventDefault(), L.trim() || 0 !== D.length)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return');
                      case 3:
                        if ((A(''), R([]), G(!0), (c = []), !(D.length > 0))) {
                          e.next = 11;
                          break;
                        }
                        return (e.next = 10), Object(O.b)(D);
                      case 10:
                        c = e.sent;
                      case 11:
                        return (
                          (s = {
                            sender: t.user._id,
                            recipient: N,
                            text: L,
                            media: c,
                            createdAt: new Date().toISOString(),
                          }),
                          G(!1),
                          (e.next = 15),
                          y(Object(f.b)({ msg: s, auth: t, socket: a }))
                        );
                      case 15:
                        M.current && M.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          Object(d.useEffect)(
            function () {
              (function () {
                var e = Object(s.a)(
                  r.a.mark(function e() {
                    return r.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              !n.data.every(function (e) {
                                return e._id !== N;
                              })
                            ) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 3), y(Object(f.f)({ auth: t, id: N }));
                          case 3:
                            setTimeout(function () {
                              M.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                            }, 50);
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [N, y, t, n.data]
          ),
            Object(d.useEffect)(
              function () {
                new IntersectionObserver(
                  function (e) {
                    e[0].isIntersecting &&
                      ce(function (e) {
                        return e + 1;
                      });
                  },
                  { threshold: 0.1 }
                ).observe(H.current);
              },
              [ce]
            ),
            Object(d.useEffect)(
              function () {
                ne > 1 && X >= 9 * $ && (y(Object(f.g)({ auth: t, id: N, page: $ + 1 })), ce(1));
              },
              [ne]
            );
          var se = function (e) {
              var n = e.video,
                c = k._id,
                a = k.avatar,
                r = k.username,
                s = k.fullname,
                i = { sender: t.user._id, recipient: c, avatar: a, username: r, fullname: s, video: n };
              y({ type: p.c.CALL, payload: i });
            },
            ie = function (e) {
              var n = e.video,
                c = t.user,
                r = c._id,
                s = c.avatar,
                i = c.username,
                o = c.fullname,
                l = { sender: r, recipient: k._id, avatar: s, username: i, fullname: o, video: n };
              v.open && (l.peerId = v._id), a.emit('callUser', l);
            };
          return Object(x.jsxs)(x.Fragment, {
            children: [
              Object(x.jsx)('div', {
                className: 'message_header',
                style: { cursor: 'pointer' },
                children:
                  0 !== k.length &&
                  Object(x.jsxs)('div', {
                    className: 'd-flex align-items-center justify-content-between p-3 w-100',
                    children: [
                      Object(x.jsx)('div', {
                        children: Object(x.jsxs)(m.b, {
                          to: '/profile/'.concat(t.user._id),
                          className: 'text-dark hover-underline',
                          children: [
                            Object(x.jsx)('img', {
                              src: k.avatar,
                              className: 'img-cover rounded-circle circle me-2',
                              alt: 'avatar',
                            }),
                            Object(x.jsx)('span', { className: 'fw-600', children: k.fullname }),
                          ],
                        }),
                      }),
                      Object(x.jsxs)('div', {
                        children: [
                          Object(x.jsx)('i', {
                            className: 'fas fa-phone-alt',
                            onClick: function () {
                              se({ video: !1 }), ie({ video: !1 });
                            },
                          }),
                          Object(x.jsx)('i', {
                            className: 'fas fa-video mx-3',
                            onClick: function () {
                              se({ video: !0 }), ie({ video: !0 });
                            },
                          }),
                          Object(x.jsx)('i', {
                            className: 'fas fa-trash text-danger',
                            onClick: function () {
                              return window.confirm('B\u1ea1n c\xf3 mu\u1ed1n xo\xe1 tin nh\u1eafn?')
                                ? (y(Object(f.c)({ auth: t, id: N })), ae.push('/message'))
                                : null;
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
              Object(x.jsx)('div', {
                className: 'chat_container',
                style: { height: D.length > 0 ? 'calc(100% - 180px)' : '' },
                children: Object(x.jsxs)('div', {
                  className: 'chat_display',
                  ref: M,
                  children: [
                    Object(x.jsx)('button', {
                      type: 'button',
                      style: { marginTop: '-25px', opacity: 0 },
                      ref: H,
                      children: 'Load more',
                    }),
                    z.map(function (e, n) {
                      return Object(x.jsxs)(
                        'div',
                        {
                          children: [
                            e.sender !== t.user._id &&
                              Object(x.jsx)('div', {
                                className: 'chat_row other_message',
                                children: Object(x.jsx)(g, { user: k, msg: e, theme: c }),
                              }),
                            e.sender === t.user._id &&
                              Object(x.jsx)('div', {
                                className: 'chat_row you_message',
                                children: Object(x.jsx)(g, { user: t.user, msg: e, theme: c, data: z }),
                              }),
                          ],
                        },
                        n
                      );
                    }),
                    F &&
                      Object(x.jsx)('div', {
                        className: 'chat_row you_message',
                        children: Object(x.jsx)('img', { src: u.a, alt: 'loading' }),
                      }),
                  ],
                }),
              }),
              Object(x.jsx)('div', {
                className: 'show_media',
                style: { display: D.length > 0 ? 'grid' : 'none' },
                children: D.map(function (e, t) {
                  return Object(x.jsxs)(
                    'div',
                    {
                      id: 'file_media',
                      children: [
                        e.type.match(/video/i)
                          ? Object(h.b)(URL.createObjectURL(e), c)
                          : Object(h.a)(URL.createObjectURL(e), c),
                        Object(x.jsx)('span', {
                          onClick: function () {
                            return (function (e) {
                              var t = Object(i.a)(D);
                              t.splice(e, 1), R(t);
                            })(t);
                          },
                          children: '\xd7',
                        }),
                      ],
                    },
                    t
                  );
                }),
              }),
              Object(x.jsxs)('form', {
                className: 'chat_input',
                onSubmit: re,
                children: [
                  Object(x.jsx)('input', {
                    type: 'text',
                    placeholder: 'Nh\u1eadp tin nh\u1eafn c\u1ee7a b\u1ea1n...',
                    value: L,
                    onChange: function (e) {
                      return A(e.target.value);
                    },
                    style: {
                      filter: c ? 'invert(1)' : 'invert(0)',
                      background: c ? '#040404' : '',
                      color: c ? 'white' : '',
                    },
                  }),
                  Object(x.jsx)(l.a, { setContent: A, content: L, theme: c }),
                  Object(x.jsxs)('div', {
                    className: 'file_upload',
                    children: [
                      Object(x.jsx)('i', { className: 'fas fa-image text-danger' }),
                      Object(x.jsx)('input', {
                        type: 'file',
                        name: 'file',
                        id: 'file',
                        multiple: !0,
                        accept: 'image/*,video/*',
                        onChange: function (e) {
                          var t = Object(i.a)(e.target.files),
                            n = '',
                            c = [];
                          t.forEach(function (e) {
                            return (
                              e || (n = 'File does not exist.'),
                              e.size > 5242880 && (n = 'The image/video largest is 5mb.'),
                              c.push(e)
                            );
                          }),
                            n && y({ type: p.c.ALERT, payload: { error: n } }),
                            R([].concat(Object(i.a)(D), c));
                        },
                      }),
                    ],
                  }),
                  Object(x.jsx)('button', {
                    type: 'submit',
                    className: 'material-icons',
                    disabled: !(L || D.length > 0),
                    children: 'near_me',
                  }),
                ],
              }),
            ],
          });
        };
      t.default = function () {
        return Object(x.jsxs)('div', {
          className: 'message d-flex mess_detail',
          children: [
            Object(x.jsx)('div', { className: 'col col-md-3 border-end left', children: Object(x.jsx)(c.a, {}) }),
            Object(x.jsx)('div', { className: 'col col-md-9 right', children: Object(x.jsx)(y, {}) }),
          ],
        });
      };
    },
    14: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      }),
        n.d(t, 'b', function () {
          return u;
        }),
        n.d(t, 'f', function () {
          return d;
        }),
        n.d(t, 'd', function () {
          return j;
        }),
        n.d(t, 'e', function () {
          return b;
        }),
        n.d(t, 'c', function () {
          return m;
        });
      var c = n(4),
        a = n.n(c),
        r = n(2),
        s = n(7),
        i = n(9),
        o = n(3),
        l = {
          GET_NOTIFIES: 'GET_NOTIFIES',
          CREATE_NOTIFY: 'CREATE_NOTIFY',
          REMOVE_NOTIFY: 'REMOVE_NOTIFY',
          UPDATE_NOTIFY: 'UPDATE_NOTIFY',
          UPDATE_SOUND: 'UPDATE_SOUND',
          DELETE_ALL_NOTIFIES: 'DELETE_ALL_NOTIFIES',
        },
        u = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, s, l, u;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (s = e.msg),
                            (l = e.socket),
                            (t.prev = 1),
                            (t.next = 4),
                            Object(i.d)('notify', s, c.token)
                          );
                        case 4:
                          (u = t.sent),
                            l.emit(
                              'createNotify',
                              Object(r.a)(
                                Object(r.a)({}, u.data.notify),
                                {},
                                { user: { fullname: c.user.fullname, avatar: c.user.avatar } }
                              )
                            ),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 11:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        d = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, r, s;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (r = e.msg),
                            (s = e.socket),
                            (t.prev = 1),
                            (t.next = 4),
                            Object(i.a)('notify/'.concat(r.id, '?url=').concat(r.url), c.token)
                          );
                        case 4:
                          s.emit('removeNotify', r), (t.next = 10);
                          break;
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t.catch(1)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 10:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        j = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), Object(i.b)('notifies', e);
                        case 3:
                          (c = t.sent), n({ type: l.GET_NOTIFIES, payload: c.data.notifies }), (t.next = 10);
                          break;
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t.catch(0)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 10:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        b = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, s;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.msg),
                            (s = e.auth),
                            n({ type: l.UPDATE_NOTIFY, payload: Object(r.a)(Object(r.a)({}, c), {}, { isRead: !0 }) }),
                            (t.prev = 2),
                            (t.next = 5),
                            Object(i.c)('/isReadNotify/'.concat(c._id), null, s.token)
                          );
                        case 5:
                          t.next = 10;
                          break;
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t.catch(2)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 10:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        m = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            n({ type: l.DELETE_ALL_NOTIFIES, payload: [] }),
                            (t.prev = 1),
                            (t.next = 4),
                            Object(i.a)('deleteAllNotify', e)
                          );
                        case 4:
                          t.next = 9;
                          break;
                        case 6:
                          (t.prev = 6),
                            (t.t0 = t.catch(1)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 9:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 6]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
    },
    15: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      }),
        n.d(t, 'b', function () {
          return u;
        }),
        n.d(t, 'e', function () {
          return d;
        }),
        n.d(t, 'f', function () {
          return j;
        }),
        n.d(t, 'g', function () {
          return b;
        }),
        n.d(t, 'd', function () {
          return m;
        }),
        n.d(t, 'c', function () {
          return p;
        });
      var c = n(4),
        a = n.n(c),
        r = n(2),
        s = n(7),
        i = n(9),
        o = n(3),
        l = {
          ADD_USER: 'ADD_USER',
          ADD_MESSAGE: 'ADD_MESSAGE',
          GET_CONVERSATIONS: 'GET_CONVERSATIONS',
          GET_MESSAGES: 'GET_MESSAGES',
          UPDATE_MESSAGES: 'UPDATE_MESSAGES',
          DELETE_MESSAGES: 'DELETE_MESSAGES',
          DELETE_CONVERSATION: 'DELETE_CONVERSATION',
          CHECK_ONLINE_OFFLINE: 'CHECK_ONLINE_OFFLINE',
        },
        u = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, s, u, d, j, b, m, p;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.msg),
                            (s = e.auth),
                            (u = e.socket),
                            n({ type: l.ADD_MESSAGE, payload: c }),
                            (d = s.user),
                            (j = d._id),
                            (b = d.avatar),
                            (m = d.fullname),
                            (p = d.username),
                            u.emit(
                              'addMessage',
                              Object(r.a)(
                                Object(r.a)({}, c),
                                {},
                                { user: { _id: j, avatar: b, fullname: m, username: p } }
                              )
                            ),
                            (t.prev = 4),
                            (t.next = 7),
                            Object(i.d)('message', c, s.token)
                          );
                        case 7:
                          t.next = 12;
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(4)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        d = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, s, u, d, j;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (s = e.page),
                            (u = void 0 === s ? 1 : s),
                            (t.prev = 1),
                            (t.next = 4),
                            Object(i.b)('conversations?limit='.concat(9 * u), c.token)
                          );
                        case 4:
                          (d = t.sent),
                            (j = []),
                            d.data.conversations.forEach(function (e) {
                              e.recipients.forEach(function (t) {
                                t._id !== c.user._id &&
                                  j.push(
                                    Object(r.a)(Object(r.a)({}, t), {}, { text: e.text, media: e.media, call: e.call })
                                  );
                              });
                            }),
                            n({ type: l.GET_CONVERSATIONS, payload: { newArr: j, result: d.data.result } }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(1)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        j = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, s, u, d, j, b;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (s = e.id),
                            (u = e.page),
                            (d = void 0 === u ? 1 : u),
                            (t.prev = 1),
                            (t.next = 4),
                            Object(i.b)('message/'.concat(s, '?limit=').concat(9 * d), c.token)
                          );
                        case 4:
                          (j = t.sent),
                            (b = Object(r.a)(Object(r.a)({}, j.data), {}, { messages: j.data.messages.reverse() })),
                            n({
                              type: l.GET_MESSAGES,
                              payload: Object(r.a)(Object(r.a)({}, b), {}, { _id: s, page: d }),
                            }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(1)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        b = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, s, u, d, j, b;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (s = e.id),
                            (u = e.page),
                            (d = void 0 === u ? 1 : u),
                            (t.prev = 1),
                            (t.next = 4),
                            Object(i.b)('message/'.concat(s, '?limit=').concat(9 * d), c.token)
                          );
                        case 4:
                          (j = t.sent),
                            (b = Object(r.a)(Object(r.a)({}, j.data), {}, { messages: j.data.messages.reverse() })),
                            n({
                              type: l.UPDATE_MESSAGES,
                              payload: Object(r.a)(Object(r.a)({}, b), {}, { _id: s, page: d }),
                            }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(1)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        m = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, r, s, u;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.msg),
                            (r = e.auth),
                            (s = e.data),
                            (u = Object(o.a)(s, c._id)),
                            n({ type: l.DELETE_MESSAGES, payload: { newData: u, _id: c.recipient } }),
                            (t.prev = 3),
                            (t.next = 6),
                            Object(i.a)('message/'.concat(c._id), r.token)
                          );
                        case 6:
                          t.next = 11;
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(3)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 11:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        p = function (e) {
          return (function () {
            var t = Object(s.a)(
              a.a.mark(function t(n) {
                var c, r;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (r = e.id),
                            n({ type: l.DELETE_CONVERSATION, payload: r }),
                            (t.prev = 2),
                            (t.next = 5),
                            Object(i.a)('conversation/'.concat(r), c.token)
                          );
                        case 5:
                          t.next = 10;
                          break;
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t.catch(2)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 10:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
    },
    17: function (e, t, n) {
      'use strict';
      t.a = n.p + 'static/media/loading.10625dac.gif';
    },
    172: function (e, t) {
      function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 172);
    },
    18: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return j;
      }),
        n.d(t, 'c', function () {
          return b;
        }),
        n.d(t, 'f', function () {
          return m;
        }),
        n.d(t, 'e', function () {
          return p;
        }),
        n.d(t, 'b', function () {
          return f;
        }),
        n.d(t, 'd', function () {
          return O;
        });
      var c = n(11),
        a = n(4),
        r = n.n(a),
        s = n(2),
        i = n(7),
        o = n(9),
        l = n(31),
        u = n(3),
        d = n(14),
        j = {
          LOADING: 'LOADING_PROFILE',
          GET_USER: 'GET_PROFILE_USER',
          FOLLOW: 'FOLLOW',
          UNFOLLOW: 'UNFOLLOW',
          GET_ID: 'GET_PROFILE_ID',
          GET_POSTS: 'GET_PROFILE_POSTS',
          UPDATE_POST: 'UPDATE_PROFILE_POST',
        },
        b = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, i, l, d, b;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.auth),
                            (a = e.id),
                            n({ type: j.GET_ID, payload: a }),
                            (t.prev = 2),
                            n({ type: j.LOADING, payload: !0 }),
                            (t.next = 6),
                            Object(o.b)('user/'.concat(a), c.token)
                          );
                        case 6:
                          return (i = t.sent), (t.next = 9), Object(o.b)('user_posts/'.concat(a), c.token);
                        case 9:
                          return (l = t.sent), (t.next = 12), i;
                        case 12:
                          return (d = t.sent), (t.next = 15), l;
                        case 15:
                          (b = t.sent),
                            n({ type: j.GET_USER, payload: d.data }),
                            n({
                              type: j.GET_POSTS,
                              payload: Object(s.a)(Object(s.a)({}, b.data), {}, { _id: a, page: 2 }),
                            }),
                            n({ type: j.LOADING, payload: !1 }),
                            (t.next = 24);
                          break;
                        case 21:
                          (t.prev = 21),
                            (t.t0 = t.catch(2)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 24:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 21]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        m = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, i;
                return r.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((c = e.userData), (a = e.auth), c.fullname)) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt(
                          'return',
                          n({ type: u.c.ALERT, payload: { error: 'Please add your full name' } })
                        );
                      case 3:
                        if (!(c.fullname.length > 25)) {
                          t.next = 5;
                          break;
                        }
                        return t.abrupt('return', n({ type: u.c.ALERT, payload: { error: 'Full name too long.' } }));
                      case 5:
                        if (!(c.story.length > 200)) {
                          t.next = 7;
                          break;
                        }
                        return t.abrupt('return', n({ type: u.c.ALERT, payload: { error: 'Story too long' } }));
                      case 7:
                        return (t.next = 9), Object(o.c)('user', Object(s.a)({}, c), a.token);
                      case 9:
                        (i = t.sent),
                          n({
                            type: u.c.AUTH,
                            payload: Object(s.a)(
                              Object(s.a)({}, a),
                              {},
                              { user: Object(s.a)(Object(s.a)({}, a.user), c) }
                            ),
                          }),
                          n({ type: u.c.ALERT, payload: { success: i.data.msg } });
                      case 12:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        p = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, i, d;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((c = e.avatar),
                            (a = e.auth),
                            (t.prev = 1),
                            n({ type: u.c.ALERT, payload: { loading: !0 } }),
                            !c)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (t.next = 6), Object(l.b)([c]);
                        case 6:
                          return (
                            (i = t.sent),
                            (t.next = 9),
                            Object(o.c)('user/avatar', { avatar: c ? i[0].url : a.username.avatar }, a.token)
                          );
                        case 9:
                          (d = t.sent),
                            n({
                              type: u.c.AUTH,
                              payload: Object(s.a)(
                                Object(s.a)({}, a),
                                {},
                                {
                                  user: Object(s.a)(
                                    Object(s.a)({}, a.user),
                                    {},
                                    { avatar: c ? i[0].url : c.user.avatar }
                                  ),
                                }
                              ),
                            }),
                            n({ type: u.c.ALERT, payload: { success: d.data.msg } });
                        case 12:
                          t.next = 17;
                          break;
                        case 14:
                          (t.prev = 14),
                            (t.t0 = t.catch(1)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 17:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 14]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        f = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var a, i, l, b, m, p, f;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = e.user),
                            (l = e.auth),
                            (b = e.users),
                            (m = e.socket),
                            b.every(function (e) {
                              return e._id !== i._id;
                            })
                              ? (a = Object(s.a)(
                                  Object(s.a)({}, i),
                                  {},
                                  { followers: [].concat(Object(c.a)(i.followers), [l.user]) }
                                ))
                              : b.forEach(function (e) {
                                  e._id === i._id &&
                                    (a = Object(s.a)(
                                      Object(s.a)({}, e),
                                      {},
                                      { followers: [].concat(Object(c.a)(e.followers), [l.user]) }
                                    ));
                                }),
                            n({ type: j.FOLLOW, payload: a }),
                            n({
                              type: u.c.AUTH,
                              payload: Object(s.a)(
                                Object(s.a)({}, l),
                                {},
                                {
                                  user: Object(s.a)(
                                    Object(s.a)({}, l.user),
                                    {},
                                    { following: [].concat(Object(c.a)(l.user.following), [a]) }
                                  ),
                                }
                              ),
                            }),
                            (t.prev = 4),
                            (t.next = 7),
                            Object(o.c)('user/'.concat(i._id, '/follow'), null, l.token)
                          );
                        case 7:
                          (p = t.sent),
                            m.emit('follow', p.data.newUser),
                            (f = {
                              id: l.user._id,
                              text: '\u0111\xe3 theo d\xf5i b\u1ea1n',
                              recipients: [a._id],
                              url: '/profile/'.concat(l.user._id),
                            }),
                            n(Object(d.b)({ auth: l, msg: f, socket: m })),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t.catch(4)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 16:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 13]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        O = function (e) {
          return (function () {
            var t = Object(i.a)(
              r.a.mark(function t(n) {
                var c, a, i, l, b, m, p;
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.user),
                            (a = e.auth),
                            (i = e.users),
                            (l = e.socket),
                            i.every(function (e) {
                              return e._id !== c._id;
                            })
                              ? (b = Object(s.a)(
                                  Object(s.a)({}, c),
                                  {},
                                  { followers: Object(u.a)(c.followers, a.user._id) }
                                ))
                              : i.forEach(function (e) {
                                  e._id === c._id &&
                                    (b = Object(s.a)(
                                      Object(s.a)({}, e),
                                      {},
                                      { followers: Object(u.a)(e.followers, a.user._id) }
                                    ));
                                }),
                            n({ type: j.UNFOLLOW, payload: b }),
                            n({
                              type: u.c.AUTH,
                              payload: Object(s.a)(
                                Object(s.a)({}, a),
                                {},
                                {
                                  user: Object(s.a)(
                                    Object(s.a)({}, a.user),
                                    {},
                                    { following: Object(u.a)(a.user.following, b._id) }
                                  ),
                                }
                              ),
                            }),
                            (t.prev = 4),
                            (t.next = 7),
                            Object(o.c)('user/'.concat(c._id, '/unfollow'), null, a.token)
                          );
                        case 7:
                          (m = t.sent),
                            l.emit('follow', m.data.newUser),
                            (p = {
                              id: a.user._id,
                              text: '\u0111\xe3 theo d\xf5i b\u1ea1n',
                              recipients: [b._id],
                              url: '/profile/'.concat(a.user._id),
                            }),
                            n(Object(d.f)({ auth: a, msg: p, socket: l })),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t.catch(4)),
                            n({ type: u.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 16:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 13]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
    },
    206: function (e, t, n) {
      var c = {
        './discover': 106,
        './discover.js': 106,
        './home': 69,
        './home.js': 69,
        './login': 57,
        './login.js': 57,
        './message': 67,
        './message/': 67,
        './message/[id]': 126,
        './message/[id].js': 126,
        './message/index': 67,
        './message/index.js': 67,
        './post/[id]': 123,
        './post/[id].js': 123,
        './profile/[id]': 125,
        './profile/[id].js': 125,
        './register': 68,
        './register.js': 68,
      };
      function a(e) {
        var t = r(e);
        return n(t);
      }
      function r(e) {
        if (!n.o(c, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return c[e];
      }
      (a.keys = function () {
        return Object.keys(c);
      }),
        (a.resolve = r),
        (e.exports = a),
        (a.id = 206);
    },
    24: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      n(1);
      var c = n(10),
        a = n(0);
      function r(e) {
        var t = e.user,
          n = e.children,
          r = e.setShowFollowers,
          s = e.setShowFollowing,
          i = e.msg;
        return Object(a.jsxs)('div', {
          className: 'd-flex p-3 user align-items-center text-wrap justify-content-between',
          children: [
            Object(a.jsxs)(c.b, {
              to: '/profile/'.concat(t._id),
              onClick: function () {
                r && r(!1), s && s(!1);
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
                      children: i
                        ? (function (e) {
                            return Object(a.jsxs)(a.Fragment, {
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
                            });
                          })(t)
                        : '',
                    }),
                  ],
                }),
              ],
            }),
            n,
          ],
        });
      }
    },
    25: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      }),
        n.d(t, 'b', function () {
          return r;
        });
      n(1);
      var c = n(0),
        a = function (e) {
          return Object(c.jsx)('img', { src: e, alt: 'images', className: 'rounded-3 img-fluid' });
        },
        r = function (e) {
          return Object(c.jsx)('video', {
            controls: !0,
            src: e,
            alt: 'images',
            className: 'rounded-3',
            children: Object(c.jsx)('track', { kind: 'captions' }),
          });
        };
    },
    253: function (e, t, n) {},
    254: function (e, t, n) {
      'use strict';
      n.r(t);
      var c = n(1),
        a = n.n(c),
        r = n(55),
        s = n.n(r),
        i = (n(147), n(2)),
        o = n(6),
        l = n.p + 'static/media/client_src_audio_ringring.278d7816.mp3',
        u = n(5),
        d = n(3),
        j = n(15),
        b = n(0);
      var m = function () {
          var e = Object(u.c)(function (e) {
              return e;
            }),
            t = e.call,
            n = e.peer,
            a = e.auth,
            r = e.socket,
            s = Object(u.b)(),
            m = Object(c.useState)(0),
            p = Object(o.a)(m, 2),
            f = p[0],
            O = p[1],
            h = Object(c.useState)(0),
            x = Object(o.a)(h, 2),
            v = x[0],
            g = x[1],
            y = Object(c.useState)(0),
            N = Object(o.a)(y, 2),
            w = N[0],
            _ = N[1],
            k = Object(c.useState)(0),
            E = Object(o.a)(k, 2),
            T = E[0],
            S = E[1],
            L = Object(c.useState)(!1),
            A = Object(o.a)(L, 2),
            C = A[0],
            P = A[1],
            D = Object(c.useState)(null),
            R = Object(o.a)(D, 2),
            I = R[0],
            U = R[1],
            F = Object(c.useState)(null),
            G = Object(o.a)(F, 2),
            M = G[0],
            H = G[1];
          console.log(I, M);
          var K = Object(c.useRef)(),
            V = Object(c.useRef)();
          Object(c.useEffect)(function () {
            return (
              (function e() {
                _(function (e) {
                  return e + 1;
                }),
                  setTimeout(e, 1e3);
              })(),
              function () {
                return _(0);
              }
            );
          }, []),
            Object(c.useEffect)(
              function () {
                g(w % 60), O(parseInt(w / 60, 10)), S(parseInt(w / 3600, 10));
              },
              [w]
            );
          var z = Object(c.useCallback)(
              function (e, t, n) {
                if (e.recipient !== a.user._id || n) {
                  var c = {
                    sender: e.sender,
                    recipient: e.recipient,
                    text: '',
                    media: [],
                    call: { video: e.video, times: t },
                    createdAt: new Date().toISOString(),
                  };
                  s(Object(j.b)({ msg: c, auth: a, socket: r }));
                }
              },
              [a, s, r]
            ),
            B = function () {
              I &&
                I.forEach(function (e) {
                  return e.stop();
                }),
                M && M.close();
              var e = C ? w : 0;
              r.emit('endCall', Object(i.a)(Object(i.a)({}, t), {}, { times: e })),
                z(t, e),
                s({ type: d.c.CALL, payload: null });
            };
          Object(c.useEffect)(
            function () {
              if (!C) {
                var e = setTimeout(function () {
                  r.emit('endCall', Object(i.a)(Object(i.a)({}, t), {}, { times: 0 })),
                    z(t, 0),
                    s({ type: d.c.CALL, payload: null });
                }, 15e3);
                return function () {
                  return clearTimeout(e);
                };
              }
              return _(0), null;
            },
            [s, C, t, r, I]
          ),
            Object(c.useEffect)(
              function () {
                return (
                  r.on('endCallToClient', function (e) {
                    I &&
                      I.forEach(function (e) {
                        return e.stop();
                      }),
                      M && M.close(),
                      z(e, e.times),
                      s({ type: d.c.CALL, payload: null });
                  }),
                  function () {
                    return r.off('endCallToClient');
                  }
                );
              },
              [r, s, I, z, M]
            );
          var Y = function (e) {
              var t = { audio: !0, video: e };
              return navigator.mediaDevices.getUserMedia(t);
            },
            W = function (e, t) {
              var n = e;
              (n.srcObject = t), n.play();
            },
            X = function () {
              Y(t.video).then(function (e) {
                W(K.current, e);
                var c = e.getTracks();
                U(c);
                var a = n.call(t.peerId, e);
                a.on('stream', function (e) {
                  W(V.current, e);
                }),
                  P(!0),
                  H(a);
              });
            };
          Object(c.useEffect)(
            function () {
              return (
                n.on('call', function (e) {
                  Y(t.video).then(function (t) {
                    K.current && W(K.current, t);
                    var n = t.getTracks();
                    U(n),
                      e.answer(t),
                      e.on('stream', function (e) {
                        V.current && W(V.current, e);
                      }),
                      P(!0),
                      H(e);
                  });
                }),
                function () {
                  return n.removeListener('call');
                }
              );
            },
            [n, t.video]
          ),
            Object(c.useEffect)(
              function () {
                return (
                  r.on('callerDisconnect', function () {
                    I &&
                      I.forEach(function (e) {
                        return e.stop();
                      }),
                      M && M.close(),
                      z(t, C ? w : 0, !0),
                      s({ type: d.c.CALL, payload: null }),
                      s({ type: d.c.ALERT, payload: { error: ''.concat(t.fullname, ' disconnect') } });
                  }),
                  function () {
                    return r.off('callerDisconnect');
                  }
                );
              },
              [r, I, s, t, z, C, w, M]
            );
          var q = function (e) {
            e.pause(), (e.currentTime = 0);
          };
          return (
            Object(c.useEffect)(
              function () {
                var e = new Audio(l);
                return (
                  C
                    ? q(e)
                    : (function (e) {
                        e.play();
                      })(e),
                  function () {
                    return q(e);
                  }
                );
              },
              [C]
            ),
            Object(b.jsxs)('div', {
              className: 'call_modal',
              children: [
                Object(b.jsx)('div', {
                  className: 'call_box',
                  style: { display: C && t.video ? 'none' : 'flex' },
                  children: Object(b.jsxs)('div', {
                    children: [
                      Object(b.jsx)('img', {
                        src: t.avatar,
                        className: 'img-cover rounded-circle circle-big',
                        alt: 'avatar',
                      }),
                      Object(b.jsx)('h4', { children: t.username }),
                      Object(b.jsx)('h6', { children: t.fullname }),
                      C
                        ? Object(b.jsxs)('div', {
                            children: [
                              ' ',
                              Object(b.jsx)('span', { children: T.toString().length < 2 ? '0'.concat(T) : T }),
                              Object(b.jsx)('span', { children: ':' }),
                              Object(b.jsx)('span', { children: f.toString().length < 2 ? '0'.concat(f) : f }),
                              Object(b.jsx)('span', { children: ':' }),
                              Object(b.jsx)('span', { children: v.toString().length < 2 ? '0'.concat(v) : v }),
                            ],
                          })
                        : Object(b.jsx)('div', {
                            children: (t.video, Object(b.jsx)('span', { children: '\u0111ang g\u1ecdi video...' })),
                          }),
                      !C &&
                        Object(b.jsxs)('div', {
                          className: 'timer',
                          children: [
                            Object(b.jsx)('small', { children: f.toString().length < 2 ? '0'.concat(f) : f }),
                            Object(b.jsx)('small', { children: ':' }),
                            Object(b.jsx)('small', { children: v.toString().length < 2 ? '0'.concat(v) : v }),
                          ],
                        }),
                      Object(b.jsxs)('div', {
                        className: 'call_menu',
                        children: [
                          Object(b.jsx)('span', {
                            className: 'material-icons call-end',
                            onClick: B,
                            children: 'call_end',
                          }),
                          t.recipient === a.user._id &&
                            !C &&
                            Object(b.jsx)(b.Fragment, {
                              children: t.video
                                ? Object(b.jsx)('span', {
                                    className: 'material-icons videocam',
                                    onClick: X,
                                    children: 'videocam',
                                  })
                                : Object(b.jsx)('span', {
                                    className: 'material-icons call',
                                    onClick: X,
                                    children: 'call',
                                  }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(b.jsxs)('div', {
                  className: 'show_video',
                  style: { opacity: C && t.video ? '1' : '0' },
                  children: [
                    Object(b.jsx)('video', {
                      ref: K,
                      className: 'you_video',
                      playsInline: !0,
                      muted: !0,
                      children: Object(b.jsx)('track', { kind: 'captions' }),
                    }),
                    Object(b.jsx)('video', {
                      ref: V,
                      className: 'other_video',
                      playsInline: !0,
                      children: Object(b.jsx)('track', { kind: 'captions' }),
                    }),
                    Object(b.jsxs)('div', {
                      className: 'time_video',
                      children: [
                        Object(b.jsx)('span', { children: T.toString().length < 2 ? '0'.concat(T) : T }),
                        Object(b.jsx)('span', { children: ':' }),
                        Object(b.jsx)('span', { children: f.toString().length < 2 ? '0'.concat(f) : f }),
                        Object(b.jsx)('span', { children: ':' }),
                        Object(b.jsx)('span', { children: v.toString().length < 2 ? '0'.concat(v) : v }),
                      ],
                    }),
                    Object(b.jsx)('button', {
                      type: 'button',
                      className: 'material-icons text-danger end_call',
                      onClick: B,
                      children: 'call_end',
                    }),
                  ],
                }),
              ],
            })
          );
        },
        p = n(128),
        f = n.n(p),
        O = n(10),
        h = n(16),
        x = n(14),
        v = n(56),
        g = n(129),
        y = n.p + 'static/media/client_src_audio_got-it-done-613.89a311f0.mp3',
        N = n(12);
      var w = function () {
        var e = Object(u.c)(function (e) {
            return e;
          }),
          t = e.auth,
          n = e.socket,
          a = e.notify,
          r = e.online,
          s = e.call,
          o = Object(u.b)(),
          l = Object(c.useRef)();
        return (
          Object(c.useEffect)(
            function () {
              n.emit('joinUser', t.user);
            },
            [t.user, n]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('likePostToClient', function (e) {
                  o({ type: N.a.UPDATE_POST, payload: e });
                }),
                function () {
                  return n.off('likePostToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('unLikePostToClient', function (e) {
                  o({ type: N.a.UPDATE_POST, payload: e });
                }),
                function () {
                  return n.off('unLikePostToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('createCommentToClient', function (e) {
                  o({ type: N.a.UPDATE_POST, payload: e });
                }),
                function () {
                  return n.off('createCommentToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('deleteCommentToClient', function (e) {
                  o({ type: N.a.UPDATE_POST, payload: e });
                }),
                function () {
                  return n.off('deleteCommentToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('likeCommentToClient', function (e) {
                  o({ type: N.a.UPDATE_POST, payload: e });
                }),
                function () {
                  return n.off('likeCommentToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('unLikeCommentToClient', function (e) {
                  o({ type: N.a.UPDATE_POST, payload: e });
                }),
                function () {
                  return n.off('unLikeCommentToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('followToClient', function (e) {
                  o({ type: d.c.AUTH, payload: Object(i.a)(Object(i.a)({}, t), {}, { user: e }) });
                }),
                function () {
                  return n.off('followToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('unFollowToClient', function (e) {
                  o({ type: d.c.AUTH, payload: Object(i.a)(Object(i.a)({}, t), {}, { user: e }) });
                }),
                function () {
                  return n.off('unFollowToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('createNotifyToClient', function (e) {
                  var t, n, c;
                  o({ type: x.a.CREATE_NOTIFY, payload: e }),
                    a.sound && l.current.play(),
                    (t = ''.concat(e.user.fullname, ' ').concat(e.text)),
                    (n = e.user.avatar),
                    (c = e.url),
                    (new Notification('T-NETWORK', { body: t, icon: n }).onclick = function (e) {
                      e.preventDefault(), window.open(c, '_blank');
                    });
                }),
                function () {
                  return n.off('createNotifyToClient');
                }
              );
            },
            [n, o, a.sound]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('removeNotifyToClient', function (e) {
                  o({ type: x.a.REMOVE_NOTIFY, payload: e });
                }),
                function () {
                  return n.off('removeNotifyToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              n.on('addMessageToClient', function (e) {
                o({ type: j.a.ADD_MESSAGE, payload: e }),
                  o({
                    type: j.a.ADD_USER,
                    payload: Object(i.a)(Object(i.a)({}, e.user), {}, { text: e.text, media: e.media }),
                  });
              });
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              n.emit('checkUserOnline', t.user);
            },
            [n, t.user]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('checkUserOnlineToMe', function (e) {
                  e.forEach(function (e) {
                    r.includes(e.id) || o({ type: d.c.ONLINE, payload: e.id });
                  });
                }),
                function () {
                  return n.off('checkUserOnlineToMe');
                }
              );
            },
            [n, o, r]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('checkUserOnlineToClient', function (e) {
                  r.includes(e) || o({ type: d.c.ONLINE, payload: e });
                }),
                function () {
                  return n.off('checkUserOnlineToClient');
                }
              );
            },
            [n, o, r]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('CheckUserOffline', function (e) {
                  o({ type: d.c.OFFLINE, payload: e });
                }),
                function () {
                  return n.off('CheckUserOffline');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('callUserToClient', function (e) {
                  o({ type: d.c.CALL, payload: e });
                }),
                function () {
                  return n.off('callUserToClient');
                }
              );
            },
            [n, o]
          ),
          Object(c.useEffect)(
            function () {
              return (
                n.on('userBusy', function () {
                  o({ type: d.c.ALERT, payload: { error: ''.concat(s.fullname, ' is busy!') } });
                }),
                function () {
                  return n.off('userBusy');
                }
              );
            },
            [n, o, s]
          ),
          Object(b.jsx)(b.Fragment, {
            children: Object(b.jsxs)('audio', {
              controls: !0,
              ref: l,
              className: 'd-none',
              children: [
                Object(b.jsx)('track', { kind: 'captions' }),
                Object(b.jsx)('source', { src: y, type: 'audio/mp3' }),
              ],
            }),
          })
        );
      };
      function _() {
        return Object(b.jsx)('div', {
          className: 'wrap-loader',
          children: Object(b.jsxs)('div', {
            className: 'blocks',
            children: [
              Object(b.jsx)('div', { className: 'block orange' }),
              Object(b.jsx)('div', { className: 'block blue' }),
            ],
          }),
        });
      }
      function k(e) {
        var t = e.msg,
          n = e.handleShow,
          c = e.bgColor;
        return Object(b.jsxs)('div', {
          className: 'toast show position-fixed text-light '.concat(c),
          style: { top: '5px', right: '5px', minWidth: '200px', zIndex: 50 },
          children: [
            Object(b.jsxs)('div', {
              className: 'toast-header text-light d-flex justify-content-between '.concat(c),
              children: [
                Object(b.jsx)('strong', { className: 'text-light ms-1', children: t.title }),
                Object(b.jsx)('button', {
                  type: 'button',
                  className: 'ms-3 mb-1 text-white',
                  'data-dismiss': 'toast',
                  style: { border: 'none', background: 'transparent' },
                  onClick: n,
                  children: Object(b.jsx)('i', { className: 'fas fa-times' }),
                }),
              ],
            }),
            Object(b.jsx)('div', { className: 'toas-body p-3', children: t.body }),
          ],
        });
      }
      function E() {
        var e = Object(u.c)(function (e) {
            return e;
          }).alert,
          t = Object(u.b)();
        return Object(b.jsxs)(b.Fragment, {
          children: [
            e.loading && Object(b.jsx)(_, {}),
            e.error &&
              Object(b.jsx)(k, {
                msg: { title: 'Error', body: e.error },
                handleShow: function () {
                  return t({ type: d.c.ALERT, payload: {} });
                },
                bgColor: 'bg-danger',
              }),
            e.success &&
              Object(b.jsx)(k, {
                msg: { title: 'Success', body: e.success },
                handleShow: function () {
                  return t({ type: d.c.ALERT, payload: {} });
                },
                bgColor: 'bg-success',
              }),
          ],
        });
      }
      var T = n(34),
        S = n.n(T);
      var L = function () {
          var e = Object(u.c)(function (e) {
              return e;
            }),
            t = e.auth,
            n = e.notify,
            c = Object(u.b)(),
            a = function () {
              c({ type: x.a.UPDATE_SOUND, payload: !n.sound });
            };
          return Object(b.jsxs)('div', {
            className: 'notify-modal',
            style: { width: '100%' },
            children: [
              Object(b.jsxs)('div', {
                className: 'title px-2 mb-2 d-flex justify-content-between align-items-center',
                children: [
                  Object(b.jsx)('span', { className: 'fs-5 fw-bold', children: 'Th\xf4ng b\xe1o' }),
                  n.sound
                    ? Object(b.jsx)('button', {
                        type: 'button',
                        onClick: a,
                        children: Object(b.jsx)('i', {
                          className: 'fas fa-bell text-danger',
                          style: { fontSize: '1.2rem' },
                        }),
                      })
                    : Object(b.jsx)('button', {
                        type: 'button',
                        onClick: a,
                        children: Object(b.jsx)('i', {
                          className: 'fas fa-bell-slash text-danger',
                          style: { fontSize: '1.2rem' },
                        }),
                      }),
                ],
              }),
              Object(b.jsx)('div', {
                className: 'body p-2',
                children: n.data.map(function (e) {
                  return Object(b.jsx)(
                    'div',
                    {
                      className: 'sub-notify',
                      children: Object(b.jsx)(O.b, {
                        to: ''.concat(e.url),
                        onClick: function () {
                          return (function (e) {
                            c(Object(x.e)({ msg: e, auth: t }));
                          })(e);
                        },
                        children: Object(b.jsxs)('div', {
                          className: 'd-flex text-dark',
                          children: [
                            Object(b.jsx)('div', {
                              children: Object(b.jsx)('img', {
                                src: e.user.avatar,
                                className: 'rounded-circle circle img-cover',
                                alt: 'avatar',
                              }),
                            }),
                            Object(b.jsxs)('div', {
                              className: 'px-2 w-100',
                              children: [
                                Object(b.jsxs)('p', {
                                  className: 'mb-0',
                                  children: [
                                    Object(b.jsx)('strong', { children: e.user.fullname }),
                                    Object(b.jsxs)('span', { children: ['\xa0', e.text, ': ', e.content] }),
                                  ],
                                }),
                                Object(b.jsxs)('div', {
                                  className: 'd-flex justify-content-between align-items-center',
                                  children: [
                                    Object(b.jsxs)('small', {
                                      className: 'text-muted',
                                      children: [
                                        Object(b.jsx)('i', { className: 'fas fa-image fw-bold text-primary me-2' }),
                                        S()(e.createdAt).fromNow(),
                                      ],
                                    }),
                                    !e.isRead && Object(b.jsx)('i', { className: 'fas fa-circle text-primary' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    },
                    e._id
                  );
                }),
              }),
              Object(b.jsx)('hr', {}),
              Object(b.jsx)('div', {
                className: 'px-2',
                children: Object(b.jsx)('p', {
                  className: 'mb-0 text-end',
                  children: Object(b.jsx)('button', {
                    type: 'button',
                    onClick: function () {
                      var e = n.data.filter(function (e) {
                        return !1 === e.isRead;
                      });
                      return 0 === e.length ||
                        window.confirm(
                          'B\u1ea1n c\xf3 '.concat(
                            e.length,
                            ' th\xf4ng b\xe1o ch\u01b0a \u0111\u1ecdc. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a t\u1ea5t c\u1ea3 kh\xf4ng?'
                          )
                        )
                        ? c(Object(x.c)(t.token))
                        : null;
                    },
                    children: Object(b.jsx)('span', {
                      className: 'hover-underline pointer text-primary',
                      children: 'Xo\xe1 t\u1ea5t c\u1ea3',
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        A = n(37);
      function C() {
        var e = Object(u.c)(function (e) {
            return e;
          }),
          t = e.auth,
          n = e.notify,
          c = Object(u.b)();
        return Object(b.jsxs)('ul', {
          className: 'navbar-nav flex-row justify-content-end align-items-center',
          children: [
            [
              { label: 'Home', icon: 'fas fa-home', path: '/' },
              { label: 'Discover', icon: 'fas fa-globe-americas', path: '/discover' },
              { label: 'Message', icon: 'fab fa-facebook-messenger', path: '/message' },
            ].map(function (e) {
              return Object(b.jsx)(
                'li',
                {
                  className: 'nav-item mx-2',
                  children: Object(b.jsx)(O.c, {
                    className:
                      'btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center nav-link text-dark',
                    exact: !0,
                    activeClassName: 'active-click',
                    to: e.path,
                    children: Object(b.jsx)('i', { className: e.icon }),
                  }),
                },
                e.label
              );
            }),
            Object(b.jsxs)('li', {
              className: 'nav-item mx-2 dropdown notify',
              children: [
                Object(b.jsxs)('button', {
                  type: 'button',
                  className:
                    'btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center position-relative',
                  'data-bs-toggle': 'dropdown',
                  id: 'dropdownNotify',
                  children: [
                    Object(b.jsx)('span', { className: 'material-icons', children: 'notifications' }),
                    n.data.length > 0
                      ? Object(b.jsxs)('span', {
                          className: 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger',
                          children: [
                            n.data.length,
                            Object(b.jsx)('span', { className: 'visually-hidden', children: 'unread messages' }),
                          ],
                        })
                      : '',
                  ],
                }),
                Object(b.jsx)('ul', {
                  className: 'dropdown-menu shadow px-2 border',
                  'aria-labelledby': 'dropownNotify',
                  children: Object(b.jsx)(L, {}),
                }),
              ],
            }),
            Object(b.jsx)('li', {
              className: 'nav-item user-username',
              children: Object(b.jsxs)(O.b, {
                to: '/profile/'.concat(t.user._id),
                className: 'd-flex align-items-center',
                children: [
                  Object(b.jsx)('img', {
                    src: t.user.avatar,
                    className: 'rounded-circle circle img-cover',
                    alt: 'avatar',
                  }),
                  Object(b.jsx)('span', { className: 'text-white d-none d-xxl-block ms-2', children: t.user.fullname }),
                ],
              }),
            }),
            Object(b.jsxs)('li', {
              className: 'nav-item dropdown',
              children: [
                Object(b.jsx)('button', {
                  className: 'nav-link text-dark text-center rounded-circle circle button-dropdown',
                  style: { paddingTop: '1px' },
                  id: 'navbarDropdown',
                  'data-bs-toggle': 'dropdown',
                  'aria-expanded': 'false',
                  type: 'button',
                  children: Object(b.jsx)('i', { className: 'fas fa-sort-down fs-4' }),
                }),
                Object(b.jsxs)('ul', {
                  className: 'dropdown-menu',
                  'aria-labelledby': 'navbarDropdown',
                  children: [
                    Object(b.jsx)('li', {
                      className: 'p-2',
                      children: Object(b.jsxs)(O.b, {
                        to: '/profile/'.concat(t.user._id),
                        children: [
                          Object(b.jsx)('img', {
                            src: t.user.avatar,
                            className: 'img-fluid rounded-circle me-2 circle-sm img-cover',
                            alt: 'avatar',
                          }),
                          Object(b.jsx)('span', { className: 'text-dark', children: t.user.username }),
                        ],
                      }),
                    }),
                    Object(b.jsx)('li', { children: Object(b.jsx)('hr', { className: 'dropdown-divider' }) }),
                    Object(b.jsx)('li', {
                      className: 'p-2',
                      children: Object(b.jsxs)(O.b, {
                        className: 'dropdown-item p-0 d-flex',
                        to: '/',
                        onClick: function () {
                          return c(Object(A.b)());
                        },
                        children: [Object(b.jsx)('i', { className: 'fas fa-sign-out-alt me-2 fs-24' }), 'Logout'],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var P = n(4),
        D = n.n(P),
        R = n(7),
        I = n(17),
        U = n(9),
        F = n(24);
      function G() {
        var e = Object(c.useState)(''),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          r = Object(c.useState)([]),
          s = Object(o.a)(r, 2),
          i = s[0],
          l = s[1],
          j = Object(c.useState)(!1),
          m = Object(o.a)(j, 2),
          p = m[0],
          f = m[1],
          h = Object(u.c)(function (e) {
            return e;
          }).auth,
          x = Object(u.b)(),
          v = (function () {
            var e = Object(R.a)(
              D.a.mark(function e(t) {
                var c;
                return D.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t.preventDefault(), n)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt('return');
                        case 3:
                          return (e.prev = 3), f(!0), (e.next = 7), Object(U.b)('search?username='.concat(n), h.token);
                        case 7:
                          (c = e.sent), l(c.data.users), f(!1), (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(3)),
                            x({ type: d.c.ALERT, payload: { error: e.t0.response.data.msg } });
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 12]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          g = function () {
            a(''), l([]);
          };
        return Object(b.jsx)('form', {
          className: 'd-flex',
          onSubmit: v,
          children: Object(b.jsxs)('div', {
            className: 'search-input',
            children: [
              Object(b.jsx)('input', {
                type: 'text',
                placeholder: 'Nh\u1eadp \u0111\u1ec3 t\xecm ki\u1ebfm...',
                onChange: function (e) {
                  a(e.target.value.toLowerCase().replace(/ /g, ''));
                },
              }),
              Object(b.jsx)('div', {
                className: 'icon',
                children: Object(b.jsx)('button', {
                  type: 'submit',
                  children: Object(b.jsx)('span', { className: 'material-icons', children: 'search' }),
                }),
              }),
              p && Object(b.jsx)('img', { src: I.a, alt: 'avatar', className: 'load' }),
              Object(b.jsx)('div', {
                className: 'users shadow rounded',
                children:
                  n &&
                  i.map(function (e) {
                    return Object(b.jsx)(
                      O.b,
                      { to: '/profile/'.concat(e._id), onClick: g, children: Object(b.jsx)(F.a, { user: e }) },
                      e._id
                    );
                  }),
              }),
            ],
          }),
        });
      }
      function M() {
        return Object(b.jsx)('div', {
          className: 'container-fluid py-1 header bg-primary',
          children: Object(b.jsxs)('div', {
            className: 'row align-items-center',
            children: [
              Object(b.jsx)('div', {
                className: 'col-sm-12 col-md-2 col-lg-2 col-xl-3 left',
                children: Object(b.jsx)(O.c, {
                  className: 'navbar-brand ms-4 text-white',
                  to: '/',
                  onClick: function () {
                    return window.scrollTo({ top: 0 });
                  },
                  children: 'T-Network',
                }),
              }),
              Object(b.jsx)('div', {
                className: 'col-sm-12 col-md-5 col-lg-6 col-xl-5 center',
                children: Object(b.jsx)(G, {}),
              }),
              Object(b.jsx)('div', {
                className: 'col-sm-12 col-md-5 col-lg-4 col-xl-4 right',
                children: Object(b.jsx)(C, {}),
              }),
            ],
          }),
        });
      }
      var H = n(11),
        K = n(47),
        V = n(25),
        z = n(43);
      var B = function () {
        var e = Object(c.useState)([]),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          r = Object(c.useState)(!1),
          s = Object(o.a)(r, 2),
          i = s[0],
          l = s[1],
          j = Object(c.useState)(''),
          m = Object(o.a)(j, 2),
          p = m[0],
          f = m[1],
          O = Object(c.useState)(''),
          h = Object(o.a)(O, 2),
          x = h[0],
          v = h[1],
          g = Object(u.c)(function (e) {
            return e;
          }),
          y = g.auth,
          w = g.status,
          _ = g.socket,
          k = Object(u.b)(),
          E = Object(c.useRef)(),
          T = Object(c.useRef)(),
          S = function (e) {
            var t = Object(H.a)(n);
            t.splice(e, 1), a(t);
          },
          L = function () {
            l(!0),
              navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia &&
                navigator.mediaDevices
                  .getUserMedia({ video: !0 })
                  .then(function (e) {
                    (E.current.srcObject = e), E.current.play();
                    var t = e.getTracks();
                    f(t[0]);
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
          };
        return (
          Object(c.useEffect)(
            function () {
              w.onEdit && (v(w.content), a(w.images));
            },
            [w]
          ),
          Object(b.jsx)('div', {
            className: 'status_modal',
            children: Object(b.jsx)('div', {
              className: 'status_wrap width-682 rounded-3 shadow bg-white p-3',
              children: Object(b.jsxs)('form', {
                onSubmit: function (e) {
                  e.preventDefault(),
                    0 === n.length && k({ type: d.c.ALERT, payload: { error: 'Please add photo.' } }),
                    w.onEdit
                      ? k(Object(N.j)({ content: x, images: n, auth: y, status: w }))
                      : k(Object(N.b)({ content: x, images: n, auth: y, socket: _ })),
                    v(''),
                    a([]),
                    p && p.stop(),
                    k({ type: d.c.STATUS, payload: !1 });
                },
                children: [
                  Object(b.jsxs)('div', {
                    className: 'header position-relative mb-3',
                    children: [
                      Object(b.jsx)('h4', { className: 'text-center mb-0', children: 'T\u1ea1o b\xe0i vi\u1ebft' }),
                      Object(b.jsx)('button', {
                        type: 'button',
                        className:
                          'position-absolute d-flex justify-content-center align-items-center btn btn-edit rounded-circle circle',
                        onClick: function () {
                          return k({ type: d.c.STATUS, payload: !1 });
                        },
                        children: Object(b.jsx)('span', { className: 'material-icons-outlined', children: 'close' }),
                      }),
                    ],
                  }),
                  Object(b.jsx)('hr', { className: 'mt-2' }),
                  Object(b.jsxs)('div', {
                    className: 'body mb-3',
                    children: [
                      Object(b.jsxs)('div', {
                        className: 'd-flex mb-3',
                        children: [
                          Object(b.jsx)('img', {
                            src: y.user.avatar,
                            className: 'img-fluid rounded-circle circle me-2 img-cover',
                            alt: 'avatar',
                          }),
                          Object(b.jsx)('span', { className: 'fw-600', children: y.user.fullname }),
                        ],
                      }),
                      Object(b.jsx)('div', {
                        className: 'form-floating',
                        children: Object(b.jsx)(K.a, {
                          onChange: function (e) {
                            return v(e.target.value);
                          },
                          value: x,
                          placeholder: 'B\u1ea1n \u0111ang ngh\u0129 g\xec?',
                        }),
                      }),
                      Object(b.jsx)('div', {
                        className: 'show_images my-3',
                        children: n.map(function (e, t) {
                          return Object(b.jsxs)(
                            'div',
                            {
                              id: 'file_img',
                              children: [
                                e.camera
                                  ? Object(V.a)(e.camera)
                                  : e.url
                                  ? Object(b.jsx)(b.Fragment, {
                                      children: e.url.match(/video/i) ? Object(V.b)(e.url) : Object(V.a)(e.url),
                                    })
                                  : Object(b.jsx)(b.Fragment, {
                                      children: e.type.match(/video/i)
                                        ? Object(V.b)(URL.createObjectURL(e))
                                        : Object(V.a)(URL.createObjectURL(e)),
                                    }),
                                Object(b.jsx)('span', {
                                  className: 'shadow-sm',
                                  role: 'button',
                                  tabIndex: 0,
                                  onKeyDown: function () {
                                    return S(t);
                                  },
                                  onClick: function () {
                                    return S(t);
                                  },
                                  children: '\xd7',
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                      i &&
                        Object(b.jsxs)(b.Fragment, {
                          children: [
                            Object(b.jsxs)('div', {
                              className: 'stream position-relative',
                              children: [
                                Object(b.jsx)('video', {
                                  src: '',
                                  className: 'rounded-3',
                                  autoPlay: !0,
                                  muted: !0,
                                  ref: E,
                                  width: '100%',
                                  height: '100%',
                                }),
                                Object(b.jsx)('button', {
                                  className:
                                    'btn btn-edit rounded-circle circle-sm d-flex justify-content-center align-items-center',
                                  type: 'button',
                                  onClick: function () {
                                    p.stop(), l(!1);
                                  },
                                  children: Object(b.jsx)('span', {
                                    className: 'material-icons-outlined fs-6',
                                    children: 'close',
                                  }),
                                }),
                                Object(b.jsx)('canvas', { className: 'd-none', ref: T }),
                              ],
                            }),
                            Object(b.jsx)('p', {
                              className: 'text-center',
                              children: Object(b.jsx)('button', {
                                className:
                                  'mx-auto btn btn-danger rounded-circle d-flex justify-content-center align-items-center circle',
                                type: 'button',
                                onClick: function () {
                                  var e = E.current.clientWidth,
                                    t = E.current.clientHeight;
                                  T.current.setAttribute('width', e),
                                    T.current.setAttribute('height', t),
                                    T.current.getContext('2d').drawImage(E.current, 0, 0, e, t);
                                  var c = T.current.toDataURL();
                                  a([].concat(Object(H.a)(n), [{ camera: c }]));
                                },
                                children: Object(b.jsx)('span', {
                                  className: 'material-icons-outlined',
                                  children: 'monochrome_photos',
                                }),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  Object(b.jsxs)('div', {
                    className: 'footer',
                    children: [
                      Object(b.jsxs)('div', {
                        className: 'p-3 rounded-3 mb-3 border row mx-0 shadow-sm',
                        children: [
                          Object(b.jsx)('div', {
                            className: 'col-md-5 d-flex align-items-center fw-600',
                            children: Object(b.jsx)('span', { children: 'Th\xeam v\xe0o b\xe0i vi\u1ebft' }),
                          }),
                          Object(b.jsx)('div', {
                            className: 'col-md-7',
                            children: Object(b.jsxs)('div', {
                              className: 'd-flex justify-content-end',
                              children: [
                                Object(b.jsx)('div', {
                                  className:
                                    'p-2 d-flex btn-hover rounded-circle circle justify-content-center align-items-center',
                                  children: Object(b.jsxs)('label', {
                                    htmlFor: 'file',
                                    style: { height: '24px' },
                                    children: [
                                      Object(b.jsx)('span', {
                                        className: 'material-icons-outlined text-success pointer',
                                        children: 'photo_library',
                                      }),
                                      Object(b.jsx)('input', {
                                        type: 'file',
                                        id: 'file',
                                        name: 'file',
                                        accept: 'image/*,video/*',
                                        multiple: !0,
                                        onChange: function (e) {
                                          var t = Object(H.a)(e.target.files),
                                            c = '',
                                            r = [];
                                          return (
                                            t.forEach(function (e) {
                                              return (
                                                e || (c = 'The image does not exists!'),
                                                e.size > 5242880 && (c = 'The image/video largest is 5mb.'),
                                                r.push(e)
                                              );
                                            }),
                                            c && k({ type: d.c.ALERT, payload: { error: c } }),
                                            a([].concat(Object(H.a)(n), r)),
                                            null
                                          );
                                        },
                                      }),
                                    ],
                                  }),
                                }),
                                Object(b.jsx)('div', {
                                  className:
                                    'p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center',
                                  children: Object(b.jsx)('span', {
                                    className: 'material-icons-outlined text-danger pointer',
                                    onKeyDown: L,
                                    onClick: L,
                                    role: 'button',
                                    tabIndex: 0,
                                    children: 'video_camera_front',
                                  }),
                                }),
                                Object(b.jsx)('div', {
                                  className:
                                    'p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center',
                                  children: Object(b.jsx)(z.a, { setContent: v, content: x }),
                                }),
                                Object(b.jsx)('div', {
                                  className:
                                    'p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center',
                                  children: Object(b.jsx)('span', {
                                    className: 'material-icons-outlined text-danger pointer',
                                    children: 'place',
                                  }),
                                }),
                                Object(b.jsx)('div', {
                                  className:
                                    'p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center',
                                  children: Object(b.jsx)('span', {
                                    className: 'material-icons-outlined pointer',
                                    children: 'more_horiz',
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(b.jsx)('button', {
                        type: 'submit',
                        className: 'btn btn-primary w-100 fw-600',
                        children: '\u0110\u0103ng',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      function Y() {
        return Object(b.jsx)('div', {
          className: 'd-flex justify-content-center align-items-center',
          style: { height: '100vh' },
          children: Object(b.jsx)('h1', { children: '404 | Not Found.' }),
        });
      }
      var W = function () {
        var e = Object(h.g)(),
          t = e.page,
          c = e.id,
          r = '';
        return (
          Object(u.c)(function (e) {
            return e;
          }).auth.token && (r = c ? ''.concat(t, '/[id]') : ''.concat(t)),
          (function (e) {
            try {
              return a.a.createElement(n(206)('./'.concat(e)).default);
            } catch (t) {
              return Object(b.jsx)(Y, {});
            }
          })(r)
        );
      };
      var X = function (e) {
          return localStorage.getItem('firstLogin')
            ? Object(b.jsx)(h.b, Object(i.a)({}, e))
            : Object(b.jsx)(h.a, { to: '/' });
        },
        q = n(69),
        J = n(57),
        Z = n(68);
      var $ = function () {
          var e = Object(u.c)(function (e) {
              return e;
            }),
            t = e.auth,
            n = e.status,
            a = e.call,
            r = Object(u.b)();
          return (
            Object(c.useEffect)(
              function () {
                r(Object(A.c)());
                var e = Object(g.io)();
                return (
                  r({ type: d.c.SOCKET, payload: e }),
                  function () {
                    return e.close();
                  }
                );
              },
              [r]
            ),
            Object(c.useEffect)(
              function () {
                t.token && (r(Object(N.e)(t.token)), r(Object(v.getSuggestions)(t.token)), r(Object(x.d)(t.token)));
              },
              [r, t.token]
            ),
            Object(c.useEffect)(function () {
              'Notification' in window
                ? 'granted' === Notification.permission ||
                  ('denied' !== Notification.permission && Notification.requestPermission().then(function (e) {}))
                : alert('This browser does not support desktop notification');
            }, []),
            Object(c.useEffect)(
              function () {
                var e = new f.a(void 0, { path: '/', secure: !0 });
                r({ type: d.c.PEER, payload: e });
              },
              [r]
            ),
            Object(b.jsxs)(O.a, {
              children: [
                Object(b.jsx)(E, {}),
                t.token && Object(b.jsx)(M, {}),
                n && Object(b.jsx)(B, {}),
                t.token && Object(b.jsx)(w, {}),
                a && Object(b.jsx)(m, {}),
                Object(b.jsx)(h.b, { exact: !0, path: '/', component: t.token ? q.default : J.default }),
                Object(b.jsx)(h.b, { exact: !0, path: '/login', component: J.default }),
                Object(b.jsx)(h.b, { exact: !0, path: '/register', component: Z.default }),
                Object(b.jsx)(X, { exact: !0, path: '/:page', component: W }),
                Object(b.jsx)(X, { exact: !0, path: '/:page/:id', component: W }),
              ],
            })
          );
        },
        Q = (n(253), n(48)),
        ee = n(139),
        te = n(140),
        ne = {},
        ce = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d.c.ALERT:
              return t.payload;
            default:
              return e;
          }
        },
        ae = {},
        re = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d.c.AUTH:
              return t.payload;
            default:
              return e;
          }
        },
        se = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d.c.CALL:
              return t.payload;
            default:
              return e;
          }
        },
        ie = n(70).DISCOVER_TYPES,
        oe = { loading: !1, posts: [], result: 9, page: 2, firstLoad: !1 },
        le = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case ie.LOADING:
              return Object(i.a)(Object(i.a)({}, e), {}, { loading: t.payload });
            case ie.GET_POSTS:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                { posts: t.payload.posts, result: t.payload.result, firstLoad: !0 }
              );
            case ie.UPDATE_POST:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                { posts: t.payload.posts, result: t.payload.result, page: e.page + 1 }
              );
            default:
              return e;
          }
        },
        ue = { users: [], resultUsers: 0, data: [], firstLoad: !1 },
        de = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case j.a.ADD_USER:
              return e.users.every(function (e) {
                return e._id !== t.payload._id;
              })
                ? Object(i.a)(Object(i.a)({}, e), {}, { users: [t.payload].concat(Object(H.a)(e.users)) })
                : e;
            case j.a.ADD_MESSAGE:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                {
                  data: e.data.map(function (e) {
                    return e._id === t.payload.recipient || e._id === t.payload.sender
                      ? Object(i.a)(
                          Object(i.a)({}, e),
                          {},
                          { messages: [].concat(Object(H.a)(e.messages), [t.payload]), result: e.result + 1 }
                        )
                      : e;
                  }),
                  users: e.users.map(function (e) {
                    return e._id === t.payload.recipient || e._id === t.payload.sender
                      ? Object(i.a)(
                          Object(i.a)({}, e),
                          {},
                          { text: t.payload.text, media: t.payload.media, call: t.payload.call }
                        )
                      : e;
                  }),
                }
              );
            case j.a.GET_CONVERSATIONS:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                { users: t.payload.newArr, resultUsers: t.payload.result, firstLoad: !0 }
              );
            case j.a.GET_MESSAGES:
              return Object(i.a)(Object(i.a)({}, e), {}, { data: [].concat(Object(H.a)(e.data), [t.payload]) });
            case j.a.UPDATE_MESSAGES:
              return Object(i.a)(Object(i.a)({}, e), {}, { data: Object(d.b)(e.data, t.payload._id, t.payload) });
            case j.a.DELETE_MESSAGES:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                {
                  data: e.data.map(function (e) {
                    return e._id === t.payload._id
                      ? Object(i.a)(Object(i.a)({}, e), {}, { messages: t.payload.newData })
                      : e;
                  }),
                }
              );
            case j.a.DELETE_CONVERSATION:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                { users: Object(d.a)(e.users, t.payload), data: Object(d.a)(e.data, t.payload) }
              );
            case j.a.CHECK_ONLINE_OFFLINE:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                {
                  users: e.users.map(function (e) {
                    return t.payload.includes(e._id)
                      ? Object(i.a)(Object(i.a)({}, e), {}, { online: !0 })
                      : Object(i.a)(Object(i.a)({}, e), {}, { online: !1 });
                  }),
                }
              );
            default:
              return e;
          }
        },
        je = { loading: !1, data: [], sound: !1 },
        be = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case x.a.GET_NOTIFIES:
              return Object(i.a)(Object(i.a)({}, e), {}, { data: t.payload });
            case x.a.CREATE_NOTIFY:
              return Object(i.a)(Object(i.a)({}, e), {}, { data: [t.payload].concat(Object(H.a)(e.data)) });
            case x.a.REMOVE_NOTIFY:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                {
                  data: e.data.filter(function (e) {
                    return e.id !== t.payload.id || e.url !== t.payload.url;
                  }),
                }
              );
            case x.a.UPDATE_NOTIFY:
              return Object(i.a)(Object(i.a)({}, e), {}, { data: Object(d.b)(e.data, t.payload._id, t.payload) });
            case x.a.UPDATE_SOUND:
              return Object(i.a)(Object(i.a)({}, e), {}, { sound: t.payload });
            case x.a.DELETE_ALL_NOTIFIES:
              return Object(i.a)(Object(i.a)({}, e), {}, { data: t.payload });
            default:
              return e;
          }
        },
        me = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d.c.ONLINE:
              return [].concat(Object(H.a)(e), [t.payload]);
            case d.c.OFFLINE:
              return e.filter(function (e) {
                return e !== t.payload;
              });
            default:
              return e;
          }
        },
        pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d.c.PEER:
              return t.payload;
            default:
              return e;
          }
        },
        fe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case N.a.GET_POST:
              return [].concat(Object(H.a)(e), [t.payload]);
            case N.a.UPDATE_POST:
              return Object(d.b)(e, t.payload._id, t.payload);
            default:
              return e;
          }
        },
        Oe = { posts: [], result: 0, page: 2, loading: !1 },
        he = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case N.a.CREATE_POST:
              return Object(i.a)(Object(i.a)({}, e), {}, { posts: [t.payload].concat(Object(H.a)(e.posts)) });
            case N.a.LOADING_POST:
              return Object(i.a)(Object(i.a)({}, e), {}, { loading: t.payload });
            case N.a.GET_POSTS:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                { posts: t.payload.posts, result: t.payload.result, page: t.payload.page }
              );
            case N.a.UPDATE_POST:
              return Object(i.a)(Object(i.a)({}, e), {}, { posts: Object(d.b)(e.posts, t.payload._id, t.payload) });
            case N.a.DELETE_POST:
              return Object(i.a)(Object(i.a)({}, e), {}, { posts: Object(d.a)(e.posts, t.payload._id) });
            default:
              return e;
          }
        },
        xe = n(18),
        ve = { loading: !1, ids: [], users: [], userPosts: [] },
        ge = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case xe.a.LOADING:
              return Object(i.a)(Object(i.a)({}, e), {}, { loading: t.payload });
            case xe.a.GET_USER:
              return Object(i.a)(Object(i.a)({}, e), {}, { users: [].concat(Object(H.a)(e.users), [t.payload.user]) });
            case xe.a.FOLLOW:
            case xe.a.UNFOLLOW:
              return Object(i.a)(Object(i.a)({}, e), {}, { users: Object(d.b)(e.users, t.payload._id, t.payload) });
            case xe.a.GET_ID:
              return Object(i.a)(Object(i.a)({}, e), {}, { ids: [].concat(Object(H.a)(e.ids), [t.payload]) });
            case xe.a.GET_POSTS:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                { userPosts: [].concat(Object(H.a)(e.userPosts), [t.payload]) }
              );
            case xe.a.UPDATE_POST:
              return Object(i.a)(
                Object(i.a)({}, e),
                {},
                { userPosts: Object(d.b)(e.userPosts, t.payload._id, t.payload) }
              );
            default:
              return e;
          }
        },
        ye = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d.c.SOCKET:
              return t.payload;
            default:
              return e;
          }
        },
        Ne = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d.c.STATUS:
              return t.payload;
            default:
              return e;
          }
        },
        we = n(56).SUGGES_TYPES,
        _e = { loading: !1, users: [] },
        ke = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case we.LOADING:
              return Object(i.a)(Object(i.a)({}, e), {}, { loading: t.payload });
            case we.GET_USERS:
              return Object(i.a)(Object(i.a)({}, e), {}, { users: t.payload.users });
            default:
              return e;
          }
        },
        Ee = Object(Q.combineReducers)({
          auth: re,
          alert: ce,
          profile: ge,
          status: Ne,
          homePosts: he,
          postDetails: fe,
          discover: le,
          suggestions: ke,
          socket: ye,
          notify: be,
          message: de,
          online: me,
          call: se,
          peer: pe,
        }),
        Te = Object(Q.createStore)(Ee, Object(ee.composeWithDevTools)(Object(Q.applyMiddleware)(te.a))),
        Se = function (e) {
          var t = e.children;
          return Object(b.jsx)(u.a, { store: Te, children: t });
        },
        Le = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 258))
              .then(function (t) {
                var n = t.getCLS,
                  c = t.getFID,
                  a = t.getFCP,
                  r = t.getLCP,
                  s = t.getTTFB;
                n(e), c(e), a(e), r(e), s(e);
              });
        };
      s.a.render(
        Object(b.jsx)(a.a.StrictMode, { children: Object(b.jsx)(Se, { children: Object(b.jsx)($, {}) }) }),
        document.getElementById('root')
      ),
        Le();
    },
    3: function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return c;
      }),
        n.d(t, 'b', function () {
          return a;
        }),
        n.d(t, 'a', function () {
          return r;
        });
      var c = {
          AUTH: 'AUTH',
          ALERT: 'ALERT',
          STATUS: 'STATUS',
          SOCKET: 'SOCKET',
          ONLINE: 'ONLINE',
          OFFLINE: 'OFFLINE',
          CALL: 'CALL',
          PEER: 'PEER',
        },
        a = function (e, t, n) {
          return e.map(function (e) {
            return e._id === t ? n : e;
          });
        },
        r = function (e, t) {
          return e.filter(function (e) {
            return e._id !== t;
          });
        };
    },
    31: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return o;
        });
      var c = n(4),
        a = n.n(c),
        r = n(130),
        s = n(7),
        i = function (e) {
          var t = '';
          return (
            e || (t = 'File does not exists.'),
            e.size > 1048576 && (t = 'The largest file is 1mb'),
            'image/jpeg' !== e.type && 'image/png' !== e.type && (t = 'The image is incorrect'),
            t
          );
        },
        o = (function () {
          var e = Object(s.a)(
            a.a.mark(function e(t) {
              var n, c, s, i, o, l;
              return a.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = []), (c = Object(r.a)(t)), (e.prev = 2), c.s();
                      case 4:
                        if ((s = c.n()).done) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (i = s.value),
                          (o = new FormData()),
                          i.camera ? o.append('file', i.camera) : o.append('file', i),
                          o.append('upload_preset', 'z7zord5p'),
                          o.append('cloud_name', 'to2k'),
                          (e.next = 12),
                          fetch('https://api.cloudinary.com/v1_1/to2k/image/upload', { method: 'POST', body: o }).then(
                            function (e) {
                              return e.json();
                            }
                          )
                        );
                      case 12:
                        (l = e.sent), n.push({ public_id: l.public_id, url: l.secure_url });
                      case 14:
                        e.next = 4;
                        break;
                      case 16:
                        e.next = 21;
                        break;
                      case 18:
                        (e.prev = 18), (e.t0 = e.catch(2)), c.e(e.t0);
                      case 21:
                        return (e.prev = 21), c.f(), e.finish(21);
                      case 24:
                        return e.abrupt('return', n);
                      case 25:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 18, 21, 24]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    36: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      });
      var c = n(4),
        a = n.n(c),
        r = n(7),
        s = n(6),
        i = n(1),
        o = n(5),
        l = n(18),
        u = n(0);
      function d(e) {
        var t = e.user,
          n = Object(i.useState)(!1),
          c = Object(s.a)(n, 2),
          d = c[0],
          j = c[1],
          b = Object(i.useState)(!1),
          m = Object(s.a)(b, 2),
          p = m[0],
          f = m[1],
          O = Object(o.c)(function (e) {
            return e;
          }),
          h = O.auth,
          x = O.profile,
          v = O.socket,
          g = Object(o.b)();
        Object(i.useEffect)(
          function () {
            return (
              h.user.following.find(function (e) {
                return e._id === t._id;
              }) && j(!0),
              function () {
                return j(!1);
              }
            );
          },
          [h.user.following, t._id]
        );
        var y = (function () {
            var e = Object(r.a)(
              a.a.mark(function e() {
                return a.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!p) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        return (
                          j(!0), f(!0), (e.next = 6), g(Object(l.b)({ users: x.users, user: t, auth: h, socket: v }))
                        );
                      case 6:
                        f(!1);
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          N = (function () {
            var e = Object(r.a)(
              a.a.mark(function e() {
                return a.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!p) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        return (
                          j(!1), f(!0), (e.next = 6), g(Object(l.d)({ users: x.users, user: t, auth: h, socket: v }))
                        );
                      case 6:
                        f(!1);
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(u.jsx)(u.Fragment, {
          children: d
            ? Object(u.jsx)('button', {
                className: 'btn btn-outline-primary btn-sm fw-600',
                type: 'button',
                onClick: N,
                children: Object(u.jsxs)('p', {
                  className: 'mb-0 d-flex align-items-end',
                  children: [
                    Object(u.jsx)('span', { className: 'material-icons-outlined me-1', children: 'done' }),
                    'B\u1ecf theo d\xf5i',
                  ],
                }),
              })
            : Object(u.jsx)('button', {
                className: 'btn btn-primary btn-sm',
                type: 'button',
                onClick: y,
                children: Object(u.jsxs)('p', {
                  className: 'mb-0 d-flex align-items-end',
                  children: [
                    Object(u.jsx)('span', { className: 'material-icons-outlined me-1', children: 'add' }),
                    'Theo d\xf5i',
                  ],
                }),
              }),
        });
      }
    },
    37: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      }),
        n.d(t, 'c', function () {
          return u;
        }),
        n.d(t, 'd', function () {
          return d;
        }),
        n.d(t, 'b', function () {
          return j;
        });
      var c = n(4),
        a = n.n(c),
        r = n(7),
        s = n(9);
      var i = function (e) {
          var t = e.fullname,
            n = e.username,
            c = e.email,
            a = e.password,
            r = e.confirmPassword,
            s = {};
          return (
            t
              ? t.length > 25 && (s.fullName = 'Full name have to <= 25 character.')
              : (s.fullname = 'Please enter full name.'),
            n
              ? n.replace(/ /g, '').length > 25 && (s.userName = 'Username have to <= 25 character.')
              : (s.userName = 'Please enter username.'),
            c
              ? (function (e) {
                  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    e
                  );
                })(c) || (s.email = 'Email incorrect.')
              : (s.email = 'Please enter email.'),
            a
              ? a.length < 6 && (s.password = 'Password have to >= 6 character.')
              : (s.password = 'Please enter password.'),
            a !== r && (s.confirmPassword = 'Password have to match'),
            { errorMsg: s, errorLength: Object.keys(s).length }
          );
        },
        o = n(3),
        l = function (e) {
          return (function () {
            var t = Object(r.a)(
              a.a.mark(function t(n) {
                var c;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            n({ type: o.c.ALERT, payload: { loading: !0 } }),
                            (t.next = 4),
                            Object(s.d)('login', e)
                          );
                        case 4:
                          (c = t.sent),
                            n({ type: o.c.AUTH, payload: { token: c.data.access_token, user: c.data.user } }),
                            localStorage.setItem('firstLogin', !0),
                            n({ type: o.c.ALERT, payload: { success: c.data.msg } }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        u = function () {
          return (function () {
            var e = Object(r.a)(
              a.a.mark(function e(t) {
                var n;
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!localStorage.getItem('firstLogin')) {
                            e.next = 14;
                            break;
                          }
                          return (
                            t({ type: o.c.ALERT, payload: { loading: !0 } }),
                            (e.prev = 3),
                            (e.next = 6),
                            Object(s.d)('refresh_token')
                          );
                        case 6:
                          (n = e.sent),
                            t({ type: o.c.AUTH, payload: { token: n.data.access_token, user: n.data.user } }),
                            t({ type: o.c.ALERT, payload: {} }),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(3)),
                            t({ type: o.c.ALERT, payload: { error: e.t0.response.data.msg } });
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 11]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        d = function (e) {
          return (function () {
            var t = Object(r.a)(
              a.a.mark(function t(n) {
                var c, r;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.prev = 0), !((c = i(e)).errorLength > 0))) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt('return', n({ type: o.c.ALERT, payload: c.errorMsg }));
                        case 4:
                          return (
                            (t.prev = 4),
                            n({ type: o.c.ALERT, payload: { loading: !0 } }),
                            (t.next = 8),
                            Object(s.d)('register', e)
                          );
                        case 8:
                          (r = t.sent),
                            console.log(r),
                            n({ type: o.c.AUTH, payload: { token: r.data.access_token, user: r.data.user } }),
                            localStorage.setItem('firstLogin', !0),
                            n({ type: o.c.ALERT, payload: { success: r.data.msg } }),
                            (t.next = 18);
                          break;
                        case 15:
                          (t.prev = 15),
                            (t.t0 = t.catch(4)),
                            n({ type: o.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 18:
                          t.next = 23;
                          break;
                        case 20:
                          (t.prev = 20),
                            (t.t1 = t.catch(0)),
                            n({ type: o.c.ALERT, payload: { error: t.t1.response.data.msg } });
                        case 23:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [
                    [0, 20],
                    [4, 15],
                  ]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        j = function () {
          return (function () {
            var e = Object(r.a)(
              a.a.mark(function e(t) {
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), localStorage.removeItem('firstLogin'), (e.next = 4), Object(s.d)('logout')
                          );
                        case 4:
                          (window.location.href = '/'), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            t({ type: o.c.ALERT, payload: { error: e.t0.response.data.msg } });
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        };
    },
    43: function (e, t, n) {
      'use strict';
      n(1);
      var c = n(0);
      t.a = function (e) {
        var t = e.setContent,
          n = e.content;
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
                ].map(function (e) {
                  return Object(c.jsx)(
                    'button',
                    {
                      onClick: function () {
                        return t(n + e);
                      },
                      type: 'button',
                      children: Object(c.jsx)('span', { children: e }),
                    },
                    e
                  );
                }),
              }),
            }),
          ],
        });
      };
    },
    44: function (e, t, n) {
      'use strict';
      var c = n(34),
        a = n.n(c),
        r = (n(1), n(10)),
        s = n(0);
      t.a = function (e) {
        var t = e.posts;
        return 0 === e.result
          ? Object(s.jsx)('h2', { className: 'text-center', children: 'Kh\xf4ng c\xf3 b\xe0i vi\u1ebft' })
          : Object(s.jsx)('div', {
              className: 'post_thumb',
              children: t.map(function (e) {
                return Object(s.jsxs)(
                  'div',
                  {
                    className: 'post_thumb_display border rounded-3 shadow mb-5 overflow-hidden bg-white',
                    children: [
                      Object(s.jsx)(r.b, {
                        to: '/post/'.concat(e._id),
                        children: e.images[0].url.match(/video/i)
                          ? Object(s.jsx)('video', {
                              controls: !0,
                              src: e.images[0].url,
                              alt: e.images[0].url,
                              className: 'w-100',
                              children: Object(s.jsx)('track', { kind: 'captions' }),
                            })
                          : Object(s.jsx)('img', {
                              src: e.images[0].url,
                              alt: e.images[0].url,
                              style: { height: 300 },
                              className: 'w-100 img-cover img-fluid',
                            }),
                      }),
                      Object(s.jsxs)('div', {
                        className: 'post_thumb_post',
                        children: [
                          Object(s.jsxs)('div', {
                            className: 'text-dark d-flex',
                            children: [
                              Object(s.jsx)('img', {
                                src: e.user.avatar,
                                className: 'circle rounded-circle me-2',
                                alt: 'avatar',
                              }),
                              Object(s.jsxs)('div', {
                                children: [
                                  Object(s.jsx)('p', { className: 'fw-600 mb-0', children: e.user.fullname }),
                                  Object(s.jsx)(r.b, {
                                    to: '/post/'.concat(e._id),
                                    children: Object(s.jsx)('small', {
                                      className: 'text-muted hover-underline',
                                      children: a()(e.createdAt).fromNow(),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(s.jsxs)('div', {
                            className: 'd-flex align-items-center text-dark fs-6 mt-3 ps-1',
                            children: [
                              Object(s.jsxs)('div', {
                                className: 'me-3',
                                children: [
                                  Object(s.jsx)('i', { className: 'fas fa-heart text-danger me-2' }),
                                  Object(s.jsx)('strong', { children: e.likes.length }),
                                ],
                              }),
                              Object(s.jsxs)('div', {
                                children: [
                                  Object(s.jsx)('i', { className: 'far fa-comment-dots me-2' }),
                                  Object(s.jsx)('strong', { children: e.comments.length }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e._id
                );
              }),
            });
      };
    },
    45: function (e, t, n) {
      'use strict';
      var c = n(6),
        a = n(1);
      t.a = function (e) {
        var t = Object(a.useState)(!1),
          n = Object(c.a)(t, 2),
          r = n[0],
          s = n[1];
        function i() {
          window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
            r ||
            s(!0);
        }
        return (
          Object(a.useEffect)(function () {
            return (
              window.addEventListener('scroll', i),
              function () {
                return window.removeEventListener('scroll', i);
              }
            );
          }, []),
          Object(a.useEffect)(
            function () {
              r &&
                e(function () {
                  console.log('called back');
                });
            },
            [r]
          ),
          [r, s]
        );
      };
    },
    56: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'SUGGES_TYPES', function () {
          return o;
        }),
        n.d(t, 'getSuggestions', function () {
          return l;
        });
      var c = n(4),
        a = n.n(c),
        r = n(7),
        s = n(9),
        i = n(3),
        o = { LOADING: 'LOADING_SUGGES', GET_USERS: 'GET_USERS_SUGGES' },
        l = function (e) {
          return (function () {
            var t = Object(r.a)(
              a.a.mark(function t(n) {
                var c;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            n({ type: o.LOADING, payload: !0 }),
                            (t.next = 4),
                            Object(s.b)('suggestionsUser', e)
                          );
                        case 4:
                          (c = t.sent),
                            n({ type: o.GET_USERS, payload: c.data }),
                            n({ type: o.LOADING, payload: !1 }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            n({ type: i.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
    },
    57: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return b;
        });
      var c = n(33),
        a = n(2),
        r = n(6),
        s = n.p + 'static/media/logo.cc5e3104.png',
        i = n(1),
        o = n(5),
        l = n(16),
        u = n(10),
        d = n(37),
        j = n(0);
      function b() {
        var e = Object(i.useState)({ email: '', password: '' }),
          t = Object(r.a)(e, 2),
          n = t[0],
          b = t[1],
          m = n.email,
          p = n.password,
          f = Object(o.c)(function (e) {
            return e;
          }).auth,
          O = Object(i.useState)(!1),
          h = Object(r.a)(O, 2),
          x = h[0],
          v = h[1],
          g = Object(l.f)(),
          y = Object(o.b)();
        Object(i.useEffect)(
          function () {
            f.token && g.push('/');
          },
          [f.token, g]
        );
        var N = function (e) {
            var t = e.target,
              r = t.name,
              s = t.value;
            b(Object(a.a)(Object(a.a)({}, n), {}, Object(c.a)({}, r, s)));
          },
          w = x
            ? Object(j.jsx)('span', { className: 'material-icons-outlined', children: 'visibility' })
            : Object(j.jsx)('span', { className: 'material-icons-outlined', children: 'visibility_off' });
        return Object(j.jsxs)('div', {
          className: 'wrap-form',
          children: [
            Object(j.jsx)('p', {
              className: 'text-center mt-4',
              children: Object(j.jsx)('img', { src: s, height: '100', alt: 'logo' }),
            }),
            Object(j.jsx)('div', {
              className: 'rounded-15 shadow-lg overflow-hidden mx-auto',
              style: { width: 600 },
              children: Object(j.jsx)('div', {
                className: 'row',
                children: Object(j.jsx)('div', {
                  className: 'col-md-12',
                  children: Object(j.jsxs)('div', {
                    className: 'bg-white p-5 h-100',
                    children: [
                      Object(j.jsx)('p', { className: 'fs-2 my-5 text-center', children: 'T-Network' }),
                      Object(j.jsxs)('form', {
                        onSubmit: function (e) {
                          e.preventDefault(), y(Object(d.a)(n));
                        },
                        children: [
                          Object(j.jsx)('div', {
                            className: 'mb-3',
                            children: Object(j.jsx)('input', {
                              type: 'email',
                              name: 'email',
                              placeholder: 'Email',
                              className: 'form-control',
                              value: m,
                              onChange: N,
                            }),
                          }),
                          Object(j.jsx)('div', {
                            className: 'mb-3',
                            children: Object(j.jsxs)('div', {
                              className: 'position-relative',
                              children: [
                                Object(j.jsx)('input', {
                                  type: x ? 'text' : 'password',
                                  name: 'password',
                                  className: 'form-control',
                                  placeholder: 'Password',
                                  value: p,
                                  onChange: N,
                                }),
                                Object(j.jsx)('small', {
                                  className: 'position-absolute eye',
                                  onKeyDown: function () {
                                    return v(!x);
                                  },
                                  onClick: function () {
                                    return v(!x);
                                  },
                                  role: 'button',
                                  tabIndex: 0,
                                  children: w,
                                }),
                              ],
                            }),
                          }),
                          Object(j.jsxs)('button', {
                            type: 'submit',
                            className: 'btn btn-primary w-100 btn-login',
                            children: [
                              '\u0110\u0103ng nh\u1eadp',
                              Object(j.jsx)('span', { className: 'material-icons-outlined', children: 'east' }),
                            ],
                          }),
                          Object(j.jsx)('p', {
                            className: 'text-center mb-0 mt-3 form-text',
                            children: Object(j.jsxs)('small', {
                              children: [
                                'B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n?',
                                ' ',
                                Object(j.jsx)(u.b, {
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
    67: function (e, t, n) {
      'use strict';
      n.r(t);
      var c = n(71),
        a = (n(1), n(0));
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
    68: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return j;
        });
      var c = n(33),
        a = n(2),
        r = n(6),
        s = n(1),
        i = n(5),
        o = n(16),
        l = n(10),
        u = n(37),
        d = n(0);
      function j() {
        var e = Object(i.c)(function (e) {
            return e;
          }),
          t = e.auth,
          n = e.alert,
          j = Object(o.f)(),
          b = Object(i.b)(),
          m = Object(s.useState)({
            fullname: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: 'male',
          }),
          p = Object(r.a)(m, 2),
          f = p[0],
          O = p[1],
          h = f.fullname,
          x = f.username,
          v = f.email,
          g = f.password,
          y = f.confirmPassword,
          N = Object(s.useState)(!1),
          w = Object(r.a)(N, 2),
          _ = w[0],
          k = w[1],
          E = Object(s.useState)(!1),
          T = Object(r.a)(E, 2),
          S = T[0],
          L = T[1];
        Object(s.useEffect)(
          function () {
            t.token && j.push('/');
          },
          [t.token, j]
        );
        var A = function (e) {
            var t = e.target,
              n = t.name,
              r = t.value;
            O(Object(a.a)(Object(a.a)({}, f), {}, Object(c.a)({}, n, r)));
          },
          C = _
            ? Object(d.jsx)('span', { className: 'material-icons-outlined', children: 'visibility' })
            : Object(d.jsx)('span', { className: 'material-icons-outlined', children: 'visibility_off' }),
          P = S
            ? Object(d.jsx)('span', { className: 'material-icons-outlined', children: 'visibility' })
            : Object(d.jsx)('span', { className: 'material-icons-outlined', children: 'visibility_off' });
        return Object(d.jsx)('div', {
          className: 'wrap-form',
          children: Object(d.jsx)('div', {
            className: 'rounded-15 shadow-lg overflow-hidden mx-auto',
            style: { width: 600 },
            children: Object(d.jsx)('div', {
              className: 'row',
              children: Object(d.jsx)('div', {
                className: 'col-md-12',
                children: Object(d.jsxs)('div', {
                  className: 'bg-white p-5 h-100',
                  children: [
                    Object(d.jsx)('p', { className: 'fs-2 text-center my-5', children: 'T-Network' }),
                    Object(d.jsxs)('form', {
                      onSubmit: function (e) {
                        e.preventDefault(), b(Object(u.d)(f));
                      },
                      children: [
                        Object(d.jsx)('div', {
                          className: 'mb-3',
                          children: Object(d.jsxs)('label', {
                            htmlFor: 'fullname',
                            className: 'form-label',
                            children: [
                              'H\u1ecd v\xe0 t\xean',
                              Object(d.jsx)('input', {
                                type: 'text',
                                id: 'fullname',
                                name: 'fullname',
                                className: 'form-control',
                                onChange: A,
                                value: h,
                                style: { background: ''.concat(n.fullname ? '#fd2d6a14' : '') },
                              }),
                            ],
                          }),
                        }),
                        Object(d.jsx)('div', {
                          className: 'mb-3',
                          children: Object(d.jsxs)('label', {
                            htmlFor: 'username',
                            className: 'form-label',
                            children: [
                              'T\xe0i kho\u1ea3n',
                              Object(d.jsx)('input', {
                                type: 'text',
                                id: 'username',
                                name: 'username',
                                className: 'form-control',
                                onChange: A,
                                value: x.toLowerCase().replace(/ /g, ''),
                                style: { background: ''.concat(n.username ? '#fd2d6a14' : '', ' ') },
                              }),
                            ],
                          }),
                        }),
                        Object(d.jsx)('div', {
                          className: 'mb-3',
                          children: Object(d.jsxs)('label', {
                            htmlFor: 'exampleInputEmail1',
                            className: 'form-label',
                            children: [
                              '\u0110\u1ecba ch\u1ec9 email',
                              Object(d.jsx)('input', {
                                type: 'email',
                                name: 'email',
                                className: 'form-control',
                                id: 'exampleInputEmail1',
                                value: v,
                                onChange: A,
                              }),
                            ],
                          }),
                        }),
                        Object(d.jsx)('div', {
                          className: 'mb-3',
                          children: Object(d.jsxs)('div', {
                            className: 'position-relative',
                            children: [
                              Object(d.jsxs)('label', {
                                htmlFor: 'password',
                                className: 'form-label',
                                children: [
                                  'M\u1eadt kh\u1ea9u',
                                  Object(d.jsx)('input', {
                                    type: _ ? 'text' : 'password',
                                    name: 'password',
                                    className: 'form-control',
                                    id: 'password',
                                    value: g,
                                    onChange: A,
                                  }),
                                ],
                              }),
                              Object(d.jsx)('small', {
                                className: 'position-absolute',
                                style: { bottom: '8px', right: '15px' },
                                onKeyDown: function () {
                                  return k(!_);
                                },
                                onClick: function () {
                                  return k(!_);
                                },
                                role: 'button',
                                tabIndex: 0,
                                children: C,
                              }),
                            ],
                          }),
                        }),
                        Object(d.jsx)('div', {
                          className: 'mb-3',
                          children: Object(d.jsxs)('div', {
                            className: 'position-relative',
                            children: [
                              Object(d.jsxs)('label', {
                                htmlFor: 'confirmPassword',
                                className: 'form-label',
                                children: [
                                  'Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u',
                                  Object(d.jsx)('input', {
                                    type: S ? 'text' : 'password',
                                    name: 'confirmPassword',
                                    className: 'form-control',
                                    id: 'confirmPassword',
                                    value: y,
                                    onChange: A,
                                  }),
                                ],
                              }),
                              Object(d.jsx)('small', {
                                style: { bottom: '8px', right: '15px' },
                                className: 'position-absolute',
                                onKeyDown: function () {
                                  return L(!S);
                                },
                                onClick: function () {
                                  return L(!S);
                                },
                                role: 'button',
                                tabIndex: 0,
                                children: P,
                              }),
                            ],
                          }),
                        }),
                        Object(d.jsx)('div', {
                          className: 'form-group my-4',
                          children: Object(d.jsxs)('label', {
                            htmlFor: 'gender',
                            className: 'mb-3 form-label',
                            children: [
                              'Gi\u1edbi t\xednh',
                              Object(d.jsxs)('div', {
                                className: 'd-flex justify-content-between',
                                children: [
                                  Object(d.jsx)('div', {
                                    className: 'form-check',
                                    children: Object(d.jsxs)('label', {
                                      className: 'form-check-label',
                                      htmlFor: 'male',
                                      children: [
                                        'Nam',
                                        Object(d.jsx)('input', {
                                          type: 'radio',
                                          id: 'male',
                                          name: 'gender',
                                          className: 'form-check-input',
                                          value: 'male',
                                          defaultChecked: !0,
                                          onChange: A,
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(d.jsx)('div', {
                                    className: 'form-check',
                                    children: Object(d.jsxs)('label', {
                                      className: 'form-check-label',
                                      htmlFor: 'female',
                                      children: [
                                        'N\u1eef',
                                        Object(d.jsx)('input', {
                                          type: 'radio',
                                          id: 'female',
                                          name: 'gender',
                                          value: 'female',
                                          className: 'form-check-input',
                                          onChange: A,
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(d.jsx)('div', {
                                    className: 'form-check',
                                    children: Object(d.jsxs)('label', {
                                      className: 'form-check-label',
                                      htmlFor: 'other',
                                      children: [
                                        'Kh\xe1c',
                                        Object(d.jsx)('input', {
                                          type: 'radio',
                                          id: 'other',
                                          name: 'gender',
                                          value: 'other',
                                          className: 'form-check-input',
                                          onChange: A,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(d.jsx)('button', {
                          type: 'submit',
                          className: 'btn btn-primary w-100 me-2',
                          children: '\u0110\u0103ng k\xfd',
                        }),
                        Object(d.jsx)('p', {
                          className: 'text-center mb-0 mt-3 form-text',
                          children: Object(d.jsxs)('small', {
                            children: [
                              'B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n?',
                              ' ',
                              Object(d.jsx)(l.b, {
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
    69: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return E;
        });
      n(1);
      var c = n(5),
        a = n(10),
        r = n(0);
      var s = function () {
          var e = Object(c.c)(function (e) {
            return e;
          }).auth;
          return Object(r.jsx)('div', {
            className: 'rounded-10 shadow-sm p-3 border left-side-bar bg-white',
            children: Object(r.jsxs)('ul', {
              children: [
                Object(r.jsx)('li', {
                  children: Object(r.jsxs)(a.b, {
                    to: '/profile/'.concat(e.user._id),
                    children: [
                      Object(r.jsx)('img', {
                        src: e.user.avatar,
                        className: 'me-2 img-cover rounded-circle circle',
                        alt: 'avatar',
                      }),
                      Object(r.jsx)('span', { className: 'fw-600', children: e.user.fullname }),
                    ],
                  }),
                }),
                Object(r.jsx)('li', {
                  children: Object(r.jsxs)(a.b, {
                    to: '/message',
                    children: [
                      Object(r.jsx)('i', { className: 'fab fa-facebook-messenger text-primary fs-3 me-2' }),
                      Object(r.jsx)('span', { className: 'fw-600', children: 'Tin nh\u1eafn' }),
                    ],
                  }),
                }),
                Object(r.jsx)('li', {
                  children: Object(r.jsxs)(a.b, {
                    to: '/discover',
                    children: [
                      Object(r.jsx)('i', { className: 'fas fa-globe-americas text-success me-2 fs-3' }),
                      Object(r.jsx)('span', { className: 'fw-600', children: 'Kh\xe1m ph\xe1' }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        i = n(4),
        o = n.n(i),
        l = n(2),
        u = n(7),
        d = n(6),
        j = n(45),
        b = n(17),
        m = n(12),
        p = n(9),
        f = n(72);
      var O = function () {
          var e = Object(c.c)(function (e) {
              return e;
            }),
            t = e.homePosts,
            n = e.auth,
            a = Object(c.b)(),
            s = Object(j.a)(function () {
              setTimeout(function () {
                x();
              }, 1e3);
            }),
            i = Object(d.a)(s, 2),
            O = i[0],
            h = i[1],
            x = (function () {
              var e = Object(u.a)(
                o.a.mark(function e() {
                  var c;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return h(!0), (e.next = 3), Object(p.b)('posts?limit='.concat(9 * t.page), n.token);
                        case 3:
                          (c = e.sent),
                            a({
                              type: m.a.GET_POSTS,
                              payload: Object(l.a)(Object(l.a)({}, c.data), {}, { page: t.page + 1 }),
                            }),
                            h(!1);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)('div', {
            className: 'posts my-3',
            children: [
              t.posts.map(function (e) {
                return Object(r.jsx)(f.a, { post: e }, e._id);
              }),
              O && Object(r.jsx)('img', { src: b.a, alt: 'loading' }),
            ],
          });
        },
        h = n(36),
        x = n(24),
        v = n(56);
      var g = function () {
          var e = Object(c.c)(function (e) {
              return e;
            }),
            t = e.auth,
            n = e.suggestions,
            a = Object(c.b)();
          return Object(r.jsxs)('div', {
            className: 'rounded-10 shadow-sm p-3 border right-side-bar bg-white',
            children: [
              Object(r.jsx)('div', { className: 'user-top', children: Object(r.jsx)(x.a, { user: t.user }) }),
              Object(r.jsxs)('div', {
                className: 'd-flex justify-content-between align-items-center my-2',
                children: [
                  Object(r.jsx)('h5', { className: 'text-danger mb-0', children: 'G\u1ee3i \xfd theo d\xf5i' }),
                  !n.loading &&
                    Object(r.jsx)('button', {
                      type: 'button',
                      onClick: function () {
                        return a(Object(v.getSuggestions)(t.token));
                      },
                      children: Object(r.jsx)('i', { className: 'fas fa-redo' }),
                    }),
                ],
              }),
              n.loading
                ? Object(r.jsx)('img', { src: b.a, alt: 'loading', className: 'd-block mx-auto my-4' })
                : Object(r.jsx)('div', {
                    className: 'suggestions',
                    children: n.users.map(function (e) {
                      return Object(r.jsx)(x.a, { user: e, children: Object(r.jsx)(h.a, { user: e }) }, e._id);
                    }),
                  }),
            ],
          });
        },
        y = n(3);
      var N = function () {
          var e = Object(c.c)(function (e) {
              return e;
            }).auth,
            t = Object(c.b)();
          return Object(r.jsx)('div', {
            className: 'status',
            children: Object(r.jsxs)('div', {
              className: 'p-3 border rounded-10 shadow-sm bg-white',
              children: [
                Object(r.jsxs)('button', {
                  className: 'btn-edit btn rounded-pill w-100 text-start',
                  type: 'button',
                  onClick: function () {
                    return t({ type: y.c.STATUS, payload: !0 });
                  },
                  children: [
                    Object(r.jsx)('img', {
                      src: e.user.avatar,
                      className: 'img-fluid circle rounded-circle me-2 img-cover',
                      alt: '',
                    }),
                    'B\u1ea1n \u0111ang ngh\u0129 g\xec?',
                  ],
                }),
                Object(r.jsx)('hr', {}),
                Object(r.jsxs)('div', {
                  className: 'row',
                  children: [
                    Object(r.jsxs)('div', {
                      className: 'col-md-6 col-lg-4 col-sm-6 live pointer left',
                      onClick: function () {
                        return t({ type: y.c.STATUS, payload: !0 });
                      },
                      children: [
                        Object(r.jsx)('span', {
                          className: 'material-icons-outlined text-danger',
                          children: 'video_camera_front',
                        }),
                        Object(r.jsx)('span', { className: 'ms-1', children: '\u1ea2nh tr\u1ef1c ti\u1ebfp' }),
                      ],
                    }),
                    Object(r.jsxs)('div', {
                      className: 'col-md-6 col-lg-4 col-sm-6 picture-video pointer center',
                      onClick: function () {
                        return t({ type: y.c.STATUS, payload: !0 });
                      },
                      children: [
                        Object(r.jsx)('span', {
                          className: 'material-icons-outlined text-success',
                          children: 'photo_library',
                        }),
                        Object(r.jsx)('span', { className: 'ms-1', children: '\u1ea2nh/video' }),
                      ],
                    }),
                    Object(r.jsx)('div', {
                      className: 'col-lg-4 activity-emoji d-none d-lg-block pointer right',
                      onClick: function () {
                        return t({ type: y.c.STATUS, payload: !0 });
                      },
                      children: Object(r.jsxs)('div', {
                        className: 'd-flex h-100 align-items-center justify-content-center',
                        children: [
                          Object(r.jsx)('span', {
                            className: 'material-icons-outlined text-warning',
                            children: 'emoji_emotions',
                          }),
                          Object(r.jsx)('span', { className: 'ms-1', children: 'C\u1ea3m x\xfac' }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        w = n(38),
        _ = n.n(w);
      var k = function () {
        return Object(r.jsxs)('div', {
          className: 'rounded-10 p-3 shadow my-4 bg-white',
          children: [
            Object(r.jsxs)('div', {
              className: 'd-flex mb-3',
              children: [
                Object(r.jsx)(_.a, { circle: !0, width: 36, height: 36 }),
                Object(r.jsx)('div', { className: 'w-100 ps-2', children: Object(r.jsx)(_.a, { count: 2 }) }),
              ],
            }),
            Object(r.jsx)(_.a, { className: 'rounded-10', height: 300 }),
            Object(r.jsx)(_.a, { className: 'my-3', width: '100%', height: 30 }),
            Object(r.jsxs)('div', {
              className: 'comment_input d-flex mb-1',
              children: [
                Object(r.jsx)(_.a, { circle: !0, height: 36, width: 36 }),
                Object(r.jsx)('div', {
                  className: 'w-100 px-3',
                  children: Object(r.jsx)(_.a, { className: 'w-100', height: 34 }),
                }),
                Object(r.jsx)(_.a, { height: 34, width: 60 }),
              ],
            }),
          ],
        });
      };
      function E() {
        var e = Object(c.c)(function (e) {
          return e;
        }).homePosts;
        return Object(r.jsx)('div', {
          className: 'container-fluid home pt-4',
          children: Object(r.jsxs)('div', {
            className: 'row',
            children: [
              Object(r.jsx)('div', { className: 'col-xl-3 d-none d-xl-block', children: Object(r.jsx)(s, {}) }),
              Object(r.jsxs)('div', {
                className: 'col-md-8 col-lg-8 col-sm-12 col-xl-5',
                children: [
                  Object(r.jsx)(N, {}),
                  e.loading
                    ? Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(k, {}), Object(r.jsx)(k, {}), Object(r.jsx)(k, {})],
                      })
                    : 0 === e.result || 0 === e.posts.length
                    ? Object(r.jsx)('h2', {
                        className: 'text-center mt-5',
                        children: 'Kh\xf4ng c\xf3 b\xe0i vi\u1ebft',
                      })
                    : Object(r.jsx)(O, {}),
                ],
              }),
              Object(r.jsx)('div', {
                className: 'col-md-4 col-lg-4 col-xl-4 d-none d-md-block',
                children: Object(r.jsx)(g, {}),
              }),
            ],
          }),
        });
      }
    },
    70: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'DISCOVER_TYPES', function () {
          return o;
        }),
        n.d(t, 'getDiscoverPosts', function () {
          return l;
        });
      var c = n(4),
        a = n.n(c),
        r = n(7),
        s = n(9),
        i = n(3),
        o = { LOADING: 'LOADING_DISCOVER', GET_POSTS: 'GET_DISCOVER_POSTS', UPDATE_POST: 'UPDATE_DISCOVER_POST' },
        l = function (e) {
          return (function () {
            var t = Object(r.a)(
              a.a.mark(function t(n) {
                var c;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            n({ type: o.LOADING, payload: !0 }),
                            (t.next = 4),
                            Object(s.b)('post_discover', e)
                          );
                        case 4:
                          (c = t.sent),
                            n({ type: o.GET_POSTS, payload: c.data }),
                            n({ type: o.LOADING, payload: !1 }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            n({ type: i.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
    },
    71: function (e, t, n) {
      'use strict';
      var c = n(2),
        a = n(4),
        r = n.n(a),
        s = n(7),
        i = n(6),
        o = n(24),
        l = n(1),
        u = n(5),
        d = n(16),
        j = n(10),
        b = n(3),
        m = n(15),
        p = n(9),
        f = n(0);
      t.a = function () {
        var e = Object(l.useState)(''),
          t = Object(i.a)(e, 2),
          n = t[0],
          a = t[1],
          O = Object(l.useState)([]),
          h = Object(i.a)(O, 2),
          x = h[0],
          v = h[1],
          g = Object(u.c)(function (e) {
            return e;
          }),
          y = g.auth,
          N = g.message,
          w = g.online,
          _ = Object(u.b)(),
          k = Object(d.g)().id,
          E = Object(d.f)(),
          T = Object(l.useRef)(),
          S = Object(l.useState)(0),
          L = Object(i.a)(S, 2),
          A = L[0],
          C = L[1],
          P = (function () {
            var e = Object(s.a)(
              r.a.mark(function e(t) {
                var c;
                return r.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t.preventDefault(), n)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt('return', v([]));
                        case 3:
                          return (e.prev = 3), (e.next = 6), Object(p.b)('search?username='.concat(n), y.token);
                        case 6:
                          (c = e.sent), v(c.data.users), (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(3)),
                            _({ type: b.c.ALERT, payload: { error: e.t0.response.data.msg } });
                        case 13:
                          return e.abrupt('return', null);
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          D = function (e) {
            return (
              a(''),
              v([]),
              _({ type: m.a.ADD_USER, payload: Object(c.a)(Object(c.a)({}, e), {}, { text: '', media: [] }) }),
              E.push('/message/'.concat(e._id))
            );
          },
          R = function (e) {
            return k === e._id ? 'active' : '';
          };
        return (
          Object(l.useEffect)(
            function () {
              N.firstLoad || _(Object(m.e)({ auth: y }));
            },
            [_, y, N.firstLoad]
          ),
          Object(l.useEffect)(
            function () {
              new IntersectionObserver(
                function (e) {
                  e[0].isIntersecting &&
                    C(function (e) {
                      return e + 1;
                    });
                },
                { threshold: 0.1 }
              ).observe(T.current);
            },
            [C]
          ),
          Object(l.useEffect)(
            function () {
              N.resultUsers >= 9 * (A - 1) && A > 1 && _(Object(m.e)({ auth: y, page: A }));
            },
            [N.resultUsers, A, y, _]
          ),
          Object(l.useEffect)(
            function () {
              N.firstLoad && _({ type: m.a.CHECK_ONLINE_OFFLINE, payload: w });
            },
            [w, N.firstLoad, _]
          ),
          Object(f.jsxs)(f.Fragment, {
            children: [
              Object(f.jsx)('form', {
                className: 'message_header d-flex px-2',
                onSubmit: P,
                children: Object(f.jsxs)('div', {
                  className: 'search-input',
                  children: [
                    Object(f.jsx)('input', {
                      type: 'text',
                      placeholder: 'Nh\u1eadp \u0111\u1ec3 t\xecm ki\u1ebfm...',
                      value: n,
                      onChange: function (e) {
                        a(e.target.value);
                      },
                    }),
                    Object(f.jsx)('div', {
                      className: 'icon',
                      children: Object(f.jsx)('button', {
                        type: 'submit',
                        children: Object(f.jsx)('span', { className: 'material-icons', children: 'search' }),
                      }),
                    }),
                  ],
                }),
              }),
              Object(f.jsxs)('div', {
                className: 'message_chat_list',
                children: [
                  0 !== x.length
                    ? Object(f.jsx)(f.Fragment, {
                        children: x.map(function (e) {
                          return Object(f.jsx)(
                            'div',
                            {
                              className: 'list_user_chat message_user rounded-3 m-2 pointer '.concat(R(e)),
                              children: Object(f.jsx)(j.b, {
                                to: '/message/'.concat(e._id),
                                className: 'w-100',
                                onClick: function () {
                                  return D(e);
                                },
                                children: Object(f.jsx)(o.a, { user: e }),
                              }),
                            },
                            e._id
                          );
                        }),
                      })
                    : Object(f.jsx)(f.Fragment, {
                        children: N.users.map(function (e) {
                          return Object(f.jsx)(
                            'div',
                            {
                              className: 'list_user_chat message_user rounded-3 m-2 pointer '.concat(R(e)),
                              children: Object(f.jsx)(j.b, {
                                to: '/message/'.concat(e._id),
                                className: 'w-100',
                                onClick: function () {
                                  return D(e);
                                },
                                children: Object(f.jsx)(o.a, {
                                  user: e,
                                  msg: !0,
                                  children: e.online
                                    ? Object(f.jsx)('i', { className: 'fas fa-circle text-success' })
                                    : y.user.following.find(function (t) {
                                        return t._id === e._id;
                                      }) && Object(f.jsx)('i', { className: 'fas fa-circle' }),
                                }),
                              }),
                            },
                            e._id
                          );
                        }),
                      }),
                  Object(f.jsx)('button', { type: 'button', ref: T, style: { opacity: 0 }, children: 'Load more' }),
                ],
              }),
            ],
          })
        );
      };
    },
    72: function (e, t, n) {
      'use strict';
      var c = n(1),
        a = n(6),
        r = n(2),
        s = n(4),
        i = n.n(s),
        o = n(7),
        l = n(0);
      var u = function (e) {
        var t = e.isLike,
          n = e.handleLike,
          c = e.handleUnLike;
        return Object(l.jsx)(l.Fragment, {
          children: t
            ? Object(l.jsx)('button', {
                onClick: c,
                type: 'button',
                children: Object(l.jsx)('small', {
                  className: 'me-3 fw-bold reply pointer text-danger',
                  children: 'Th\xedch',
                }),
              })
            : Object(l.jsx)('button', {
                onClick: n,
                type: 'button',
                children: Object(l.jsx)('small', {
                  className: 'me-3 fw-bold reply pointer text-secondary',
                  children: 'Th\xedch',
                }),
              }),
        });
      };
      var d = function () {
          return Object(l.jsx)('div', { children: Object(l.jsx)('i', { className: 'fas fa-heart text-danger' }) });
        },
        j = n(34),
        b = n.n(j),
        m = n(5),
        p = n(10),
        f = n(47),
        O = n(11),
        h = n(9),
        x = n(3),
        v = n(14),
        g = n(12),
        y = function (e) {
          return (function () {
            var t = Object(o.a)(
              i.a.mark(function t(n) {
                var c, a, s, o, l, u, d;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.comment),
                            (a = e.post),
                            (s = e.auth),
                            (o = e.socket),
                            (l = Object(r.a)(
                              Object(r.a)({}, c),
                              {},
                              { likes: [].concat(Object(O.a)(c.likes), [s.user]) }
                            )),
                            (u = Object(x.b)(a.comments, c._id, l)),
                            (d = Object(r.a)(Object(r.a)({}, a), {}, { comments: u })),
                            n({ type: g.a.UPDATE_POST, payload: d }),
                            o.emit('likeComment', d),
                            (t.prev = 6),
                            (t.next = 9),
                            Object(h.c)('comment/'.concat(c._id, '/like'), null, s.token)
                          );
                        case 9:
                          t.next = 14;
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(6)),
                            n({ type: x.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        N = function (e) {
          return (function () {
            var t = Object(o.a)(
              i.a.mark(function t(n) {
                var c, a, s, o, l, u, d;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = e.comment),
                            (a = e.post),
                            (s = e.auth),
                            (o = e.socket),
                            (l = Object(r.a)(Object(r.a)({}, c), {}, { likes: Object(x.a)(c.likes, s.user._id) })),
                            (u = Object(x.b)(a.comments, c._id, l)),
                            (d = Object(r.a)(Object(r.a)({}, a), {}, { comments: u })),
                            n({ type: g.a.UPDATE_POST, payload: d }),
                            o.emit('unLikeComment', d),
                            (t.prev = 6),
                            (t.next = 9),
                            Object(h.c)('comment/'.concat(c._id, '/unlike'), null, s.token)
                          );
                        case 9:
                          t.next = 14;
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(6)),
                            n({ type: x.c.ALERT, payload: { error: t.t0.response.data.msg } });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        w = n(43);
      var _ = function (e) {
        var t = e.post,
          n = e.children,
          s = e.onReply,
          u = e.setOnReply,
          d = Object(c.useState)(''),
          j = Object(a.a)(d, 2),
          b = j[0],
          p = j[1],
          y = Object(m.c)(function (e) {
            return e;
          }),
          N = y.auth,
          _ = y.socket,
          k = Object(m.b)(),
          E = function (e) {
            if ((e.preventDefault(), !b.trim())) return s ? u(!1) : null;
            p('');
            var n = {
              content: b,
              likes: [],
              user: N.user,
              createdAt: new Date().toISOString(),
              reply: s && s.commentId,
              tag: s && s.user,
            };
            return (
              k(
                (function (e) {
                  return (function () {
                    var t = Object(o.a)(
                      i.a.mark(function t(n) {
                        var c, a, s, o, l, u, d, j, b, m;
                        return i.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (c = e.post),
                                    (a = e.newComment),
                                    (s = e.auth),
                                    (o = e.socket),
                                    (l = Object(r.a)(
                                      Object(r.a)({}, c),
                                      {},
                                      { comments: [].concat(Object(O.a)(c.comments), [a]) }
                                    )),
                                    n({ type: g.a.UPDATE_POST, payload: l }),
                                    (t.prev = 3),
                                    (u = Object(r.a)(
                                      Object(r.a)({}, a),
                                      {},
                                      { postId: c._id, postUserId: c.user._id }
                                    )),
                                    (t.next = 7),
                                    Object(h.d)('comment', u, s.token)
                                  );
                                case 7:
                                  (d = t.sent),
                                    (j = Object(r.a)(Object(r.a)({}, d.data.newComment), {}, { user: s.user })),
                                    (b = Object(r.a)(
                                      Object(r.a)({}, c),
                                      {},
                                      { comments: [].concat(Object(O.a)(c.comments), [j]) }
                                    )),
                                    n({ type: g.a.UPDATE_POST, payload: b }),
                                    o.emit('createComment', b),
                                    (m = {
                                      id: d.data.newComment._id,
                                      text: a.reply
                                        ? '\u0111\xe3 nh\u1eafc b\u1ea1n trong b\xecnh lu\u1eadn'
                                        : '\u0111\xe3 b\xecnh lu\u1eadn b\xe0i vi\u1ebft c\u1ee7a b\u1ea1n',
                                      recipients: a.reply ? [a.tag._id] : [c.user._id],
                                      url: '/post/'.concat(c._id),
                                      content: c.content,
                                      image: c.images[0].url,
                                    }),
                                    n(Object(v.b)({ msg: m, auth: s, socket: o })),
                                    (t.next = 19);
                                  break;
                                case 16:
                                  (t.prev = 16),
                                    (t.t0 = t.catch(3)),
                                    n({ type: x.c.ALERT, payload: { error: t.t0.response.data.msg } });
                                case 19:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[3, 16]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })();
                })({ post: t, newComment: n, auth: N, socket: _ })
              ),
              s ? u(!1) : null
            );
          };
        return Object(l.jsxs)('form', {
          className: 'comment_input d-flex mb-1',
          onSubmit: E,
          children: [
            n,
            Object(l.jsx)('div', {
              children: Object(l.jsx)('img', {
                src: N.user.avatar,
                className: 'rounded-circle circle img-cover',
                alt: 'avatar',
              }),
            }),
            Object(l.jsxs)('div', {
              className: 'd-flex w-100 ps-3 pe-1',
              children: [
                Object(l.jsx)(f.a, {
                  placeholder: 'Nh\u1eadp b\xecnh lu\u1eadn',
                  value: b,
                  onChange: function (e) {
                    return p(e.target.value);
                  },
                  onKeyPress: function (e) {
                    'Enter' === e.key && E(e);
                  },
                }),
                Object(l.jsx)(w.a, { setContent: p, content: b }),
              ],
            }),
            Object(l.jsx)('button', {
              type: 'submit',
              className: 'btn btn-primary fw-500',
              style: { height: '34px' },
              children: 'G\u1eedi',
            }),
          ],
        });
      };
      var k = function (e) {
        var t = e.post,
          n = e.comment,
          c = e.setOnEdit,
          a = Object(m.c)(function (e) {
            return e;
          }),
          s = a.auth,
          u = a.socket,
          d = Object(m.b)(),
          j = function () {
            var e;
            (t.user._id !== s.user._id && n.user._id !== s.user._id) ||
              d(
                ((e = { post: t, auth: s, comment: n, socket: u }),
                (function () {
                  var t = Object(o.a)(
                    i.a.mark(function t(n) {
                      var c, a, s, o, l, u;
                      return i.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (c = e.comment),
                                (a = e.auth),
                                (s = e.post),
                                (o = e.socket),
                                (l = [].concat(
                                  Object(O.a)(
                                    s.comments.filter(function (e) {
                                      return e.reply === c._id;
                                    })
                                  ),
                                  [c]
                                )),
                                (u = Object(r.a)(
                                  Object(r.a)({}, s),
                                  {},
                                  {
                                    comments: s.comments.filter(function (e) {
                                      return !l.find(function (t) {
                                        return e._id === t._id;
                                      });
                                    }),
                                  }
                                )),
                                n({ type: g.a.UPDATE_POST, payload: u }),
                                o.emit('deleteComment', u);
                              try {
                                l.forEach(function (e) {
                                  Object(h.a)('comment/'.concat(e._id), a.token);
                                  var t = {
                                    id: e._id,
                                    text: c.reply
                                      ? '\u0111\xe3 nh\u1eafc b\u1ea1n trong b\xecnh lu\u1eadn'
                                      : '\u0111\xe3 b\xecnh lu\u1eadn b\xe0i vi\u1ebft c\u1ee7a b\u1ea1n',
                                    recipients: c.reply ? [c.tag._id] : [s.user._id],
                                    url: '/post/'.concat(s._id),
                                  };
                                  n(Object(v.f)({ msg: t, auth: a, socket: o }));
                                });
                              } catch (i) {
                                n({ type: x.c.ALERT, payload: { error: i.response.data.msg } });
                              }
                            case 6:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              );
          },
          b = function () {
            return Object(l.jsxs)(l.Fragment, {
              children: [
                Object(l.jsx)('div', {
                  className: 'dropdown-item px-2 rounded-3 fw-600',
                  style: { color: '#333333' },
                  children: Object(l.jsxs)('button', {
                    type: 'button',
                    className: 'd-flex align-items-center',
                    onClick: function () {
                      return c(!0);
                    },
                    children: [
                      Object(l.jsx)('span', { className: 'material-icons-outlined me-2', children: 'create' }),
                      Object(l.jsx)('span', { className: 'mt-2', children: 'Ch\u1ec9nh s\u1eeda' }),
                    ],
                  }),
                }),
                Object(l.jsx)('div', {
                  className: 'dropdown-item px-2 rounded-3 fw-600',
                  children: Object(l.jsxs)('button', {
                    type: 'button',
                    className: 'd-flex align-items-center',
                    onClick: j,
                    children: [
                      Object(l.jsx)('span', { className: 'material-icons-outlined me-2', children: 'delete' }),
                      Object(l.jsx)('span', { className: 'mt-2', children: 'Xo\xe1' }),
                    ],
                  }),
                }),
              ],
            });
          };
        return Object(l.jsx)('div', {
          className: 'menu d-flex align-items-center ms-5',
          children:
            (t.user._id === s.user._id || n.user._id === s.user._id) &&
            Object(l.jsx)('div', {
              className:
                'pointer btn-edit btn rounded-circle circle-sm d-flex justify-content-center align-items-center',
              style: { lineHeight: '0px' },
              children: Object(l.jsxs)('div', {
                className: 'nav-item dropdown',
                children: [
                  Object(l.jsx)('span', {
                    className: 'material-icons-outlined fs-5',
                    id: 'moreLink',
                    'data-bs-toggle': 'dropdown',
                    children: 'more_horiz',
                  }),
                  Object(l.jsx)('div', {
                    className: 'dropdown-menu fs-16 p-2 shadow border',
                    'aria-labelledby': 'moreLink',
                    children:
                      t.user._id === s.user._id
                        ? n.user._id === s.user._id
                          ? b()
                          : Object(l.jsx)('div', {
                              className: 'dropdown-item px-2 rounded-3 fw-600',
                              children: Object(l.jsxs)('button', {
                                type: 'button',
                                className: 'd-flex align-items-center',
                                onClick: j,
                                children: [
                                  Object(l.jsx)('span', {
                                    className: 'material-icons-outlined me-2',
                                    children: 'delete',
                                  }),
                                  Object(l.jsx)('span', { className: 'mt-2', children: 'Xo\xe1' }),
                                ],
                              }),
                            })
                        : n.user._id === s.user._id && b(),
                  }),
                ],
              }),
            }),
        });
      };
      var E = function (e) {
        var t = e.comment,
          n = e.post,
          s = e.commentId,
          j = e.children,
          O = Object(c.useState)(''),
          v = Object(a.a)(O, 2),
          w = v[0],
          E = v[1],
          T = Object(c.useState)(!1),
          S = Object(a.a)(T, 2),
          L = S[0],
          A = S[1],
          C = Object(c.useState)(!1),
          P = Object(a.a)(C, 2),
          D = P[0],
          R = P[1],
          I = Object(c.useState)(!1),
          U = Object(a.a)(I, 2),
          F = U[0],
          G = U[1],
          M = Object(c.useState)(!1),
          H = Object(a.a)(M, 2),
          K = H[0],
          V = H[1],
          z = Object(c.useState)(!1),
          B = Object(a.a)(z, 2),
          Y = B[0],
          W = B[1],
          X = Object(m.c)(function (e) {
            return e;
          }),
          q = X.auth,
          J = X.socket,
          Z = Object(m.b)();
        Object(c.useEffect)(
          function () {
            E(t.content),
              R(!1),
              W(!1),
              t.likes.find(function (e) {
                return e._id === q.user._id;
              }) && R(!0);
          },
          [t, q.user._id]
        );
        var $ = (function () {
            var e = Object(o.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!K) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        return R(!0), V(!0), (e.next = 6), Z(y({ comment: t, post: n, auth: q, socket: J }));
                      case 6:
                        V(!1);
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Q = (function () {
            var e = Object(o.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!K) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return');
                      case 2:
                        return R(!1), V(!0), (e.next = 6), Z(N({ comment: t, post: n, auth: q, socket: J }));
                      case 6:
                        V(!1);
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          ee = { opacity: t._id ? 1 : 0.5, pointerEvents: t._id ? 'inherit' : 'none' },
          te = { width: '100%' },
          ne = { width: 'auto' };
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsxs)('div', {
            className: 'comment_card d-flex',
            style: ee,
            children: [
              Object(l.jsx)(p.b, {
                to: '/profile/'.concat(t.user._id),
                children: Object(l.jsx)('img', {
                  src: t.user.avatar,
                  className: 'img-cover rounded-circle circle',
                  alt: 'avatar',
                }),
              }),
              Object(l.jsxs)('div', {
                className: 'comment_content ms-3 w-100',
                children: [
                  Object(l.jsx)('div', {
                    className: 'd-flex mb-1',
                    children: Object(l.jsxs)('div', {
                      style: F ? te : ne,
                      children: [
                        Object(l.jsxs)('div', {
                          className: 'mb-1 d-flex',
                          children: [
                            Object(l.jsxs)('div', {
                              className: 'top p-3',
                              style: F ? te : ne,
                              children: [
                                Object(l.jsx)(p.b, {
                                  to: '/profile/'.concat(t.user._id),
                                  className: 'text-dark hover-underline',
                                  children: Object(l.jsx)('h6', { children: t.user.fullname }),
                                }),
                                Object(l.jsx)('div', {
                                  className: 'flex-fill text-wrap',
                                  children: F
                                    ? Object(l.jsx)(f.a, {
                                        value: w,
                                        onChange: function (e) {
                                          return E(e.target.value);
                                        },
                                        autoFocus: !0,
                                      })
                                    : Object(l.jsxs)(l.Fragment, {
                                        children: [
                                          t.tag &&
                                            t.tag._id !== t.user._id &&
                                            Object(l.jsxs)(p.b, {
                                              to: 'profile/'.concat(t.tag._id),
                                              className: 'me-1',
                                              children: ['@', t.tag.fullname],
                                            }),
                                          Object(l.jsx)('span', {
                                            children:
                                              w.length < 100
                                                ? w
                                                : L
                                                ? ''.concat(w, ' ')
                                                : ''.concat(w.slice(0, 100), '... '),
                                          }),
                                          w.length > 100 &&
                                            Object(l.jsx)('button', {
                                              type: 'button',
                                              className: 'text-primary pointer hover-underline',
                                              onClick: function () {
                                                return A(!L);
                                              },
                                              children: L ? '\u1ea8n \u0111i' : 'Xem th\xeam',
                                            }),
                                        ],
                                      }),
                                }),
                                t.likes.length > 0 &&
                                  Object(l.jsxs)('div', {
                                    className: 'react d-flex bg-white rounded-pill shadow px-1',
                                    children: [
                                      Object(l.jsx)(d, {}),
                                      Object(l.jsx)('strong', { className: 'mx-2', children: t.likes.length }),
                                    ],
                                  }),
                              ],
                            }),
                            Object(l.jsx)(k, { post: n, comment: t, setOnEdit: G }),
                          ],
                        }),
                        Object(l.jsxs)('div', {
                          className: 'd-flex',
                          children: [
                            F
                              ? Object(l.jsxs)(l.Fragment, {
                                  children: [
                                    Object(l.jsx)('button', {
                                      onClick: function () {
                                        var e;
                                        t.content !== w
                                          ? (Z(
                                              ((e = { comment: t, post: n, content: w, auth: q }),
                                              (function () {
                                                var t = Object(o.a)(
                                                  i.a.mark(function t(n) {
                                                    var c, a, s, o, l, u, d;
                                                    return i.a.wrap(
                                                      function (t) {
                                                        for (;;)
                                                          switch ((t.prev = t.next)) {
                                                            case 0:
                                                              return (
                                                                (c = e.content),
                                                                (a = e.post),
                                                                (s = e.auth),
                                                                (o = e.comment),
                                                                (l = Object(x.b)(
                                                                  a.comments,
                                                                  o._id,
                                                                  Object(r.a)(Object(r.a)({}, o), {}, { content: c })
                                                                )),
                                                                (u = Object(r.a)(
                                                                  Object(r.a)({}, a),
                                                                  {},
                                                                  { comments: l }
                                                                )),
                                                                n({ type: g.a.UPDATE_POST, payload: u }),
                                                                (t.prev = 4),
                                                                (t.next = 7),
                                                                Object(h.c)(
                                                                  'comment/'.concat(o._id),
                                                                  { content: c },
                                                                  s.token
                                                                )
                                                              );
                                                            case 7:
                                                              (d = t.sent), console.log(d), (t.next = 14);
                                                              break;
                                                            case 11:
                                                              (t.prev = 11),
                                                                (t.t0 = t.catch(4)),
                                                                n({
                                                                  type: x.c.ALERT,
                                                                  payload: { error: t.t0.response.data.msg },
                                                                });
                                                            case 14:
                                                            case 'end':
                                                              return t.stop();
                                                          }
                                                      },
                                                      t,
                                                      null,
                                                      [[4, 11]]
                                                    );
                                                  })
                                                );
                                                return function (e) {
                                                  return t.apply(this, arguments);
                                                };
                                              })())
                                            ),
                                            G(!1))
                                          : G(!1);
                                      },
                                      type: 'button',
                                      children: Object(l.jsx)('small', {
                                        className: 'me-3 fw-bold text-secondary reply',
                                        children: 'C\u1eadp nh\u1eadt',
                                      }),
                                    }),
                                    Object(l.jsx)('button', {
                                      onClick: function () {
                                        return G(!1);
                                      },
                                      type: 'button',
                                      children: Object(l.jsx)('small', {
                                        className: 'me-3 fw-bold text-secondary reply',
                                        children: 'Hu\u1ef7 b\u1ecf',
                                      }),
                                    }),
                                  ],
                                })
                              : Object(l.jsxs)(l.Fragment, {
                                  children: [
                                    Object(l.jsx)(u, { isLike: D, handleLike: $, handleUnLike: Q }),
                                    Object(l.jsx)('button', {
                                      onClick: function () {
                                        return Y
                                          ? W(!1)
                                          : (W(Object(r.a)(Object(r.a)({}, t), {}, { commentId: s })), null);
                                      },
                                      type: 'button',
                                      children: Object(l.jsx)('small', {
                                        className: 'me-3 fw-bold text-secondary reply',
                                        children: Y ? 'Hu\u1ef7 b\u1ecf' : 'Ph\u1ea3n h\u1ed3i',
                                      }),
                                    }),
                                  ],
                                }),
                            Object(l.jsx)('small', {
                              className: 'text-secondary pointer',
                              children: b()(t.createdAt).fromNow(),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  j,
                  Y &&
                    Object(l.jsxs)('div', {
                      className: 'mt-3',
                      children: [
                        Object(l.jsx)(_, { post: n, onReply: Y, setOnReply: W }),
                        Object(l.jsxs)('small', {
                          className: 'fw-bold text-muted',
                          children: [
                            'Ph\u1ea3n h\u1ed3i:',
                            ' ',
                            Object(l.jsxs)(p.b, {
                              to: 'profile/'.concat(Y.user._id),
                              className: 'me-3 fs-14',
                              children: ['@', Y.user.fullname, ':'],
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
      var T = function (e) {
        var t = e.comment,
          n = e.post,
          r = e.replyCmt,
          s = Object(c.useState)([]),
          i = Object(a.a)(s, 2),
          o = i[0],
          u = i[1],
          d = Object(c.useState)(1),
          j = Object(a.a)(d, 2),
          b = j[0],
          m = j[1];
        return (
          Object(c.useEffect)(
            function () {
              u(r.slice(r.length - b));
            },
            [r, b]
          ),
          Object(l.jsx)(l.Fragment, {
            children: Object(l.jsx)('div', {
              className: 'comment_display',
              children: Object(l.jsx)(E, {
                comment: t,
                post: n,
                commentId: t._id,
                children: Object(l.jsxs)('div', {
                  className: 'mt-3',
                  children: [
                    r.length - b > 0
                      ? Object(l.jsx)('button', {
                          type: 'button',
                          className: 'text-secondary mb-3',
                          onClick: function () {
                            return m(b + 10);
                          },
                          children: Object(l.jsx)('span', {
                            className: 'fw-600',
                            children: 'Xem th\xeam b\xecnh lu\u1eadn...',
                          }),
                        })
                      : r.length > 2 &&
                        Object(l.jsx)('button', {
                          type: 'button',
                          className: 'text-secondary mb-3',
                          onClick: function () {
                            return m(2);
                          },
                          children: Object(l.jsx)('span', {
                            className: 'fw-600',
                            children: '\u1ea8n b\xecnh lu\u1eadn',
                          }),
                        }),
                    o.map(function (e) {
                      return e.reply && Object(l.jsx)(E, { comment: e, post: n, commentId: t._id }, e._id);
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
      var S = function (e) {
          var t = e.post,
            n = Object(c.useState)([]),
            r = Object(a.a)(n, 2),
            s = r[0],
            i = r[1],
            o = Object(c.useState)([]),
            u = Object(a.a)(o, 2),
            d = u[0],
            j = u[1],
            b = Object(c.useState)(2),
            m = Object(a.a)(b, 2),
            p = m[0],
            f = m[1],
            O = Object(c.useState)([]),
            h = Object(a.a)(O, 2),
            x = h[0],
            v = h[1];
          return (
            Object(c.useEffect)(
              function () {
                var e = t.comments.filter(function (e) {
                  return !e.reply;
                });
                i(e), j(e.slice(e.length - p));
              },
              [t.comments, p]
            ),
            Object(c.useEffect)(
              function () {
                var e = t.comments.filter(function (e) {
                  return e.reply;
                });
                v(e);
              },
              [t.comments]
            ),
            Object(l.jsxs)('div', {
              className: 'comments',
              children: [
                s.length - p > 0
                  ? Object(l.jsx)('button', {
                      type: 'button',
                      className: 'text-secondary hover-underline mb-3',
                      onClick: function () {
                        return f(p + 10);
                      },
                      children: Object(l.jsx)('span', { className: 'fw-600', children: 'Xem them binh luan...' }),
                    })
                  : s.length > 2 &&
                    Object(l.jsx)('button', {
                      type: 'button',
                      className: 'text-secondary hover-underline mb-3',
                      onClick: function () {
                        return f(2);
                      },
                      children: Object(l.jsx)('span', { className: 'fw-600', children: 'An binh luan' }),
                    }),
                d.map(function (e) {
                  return Object(l.jsx)(
                    T,
                    {
                      comment: e,
                      post: t,
                      replyCmt: x.filter(function (t) {
                        return t.reply === e._id;
                      }),
                    },
                    e._id
                  );
                }),
              ],
            })
          );
        },
        L = n(141);
      var A = function (e) {
        var t = e.images.map(function (e) {
          return e.url;
        });
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsx)(L.a, { images: t, hideOverlay: !0, overlayBackgroundColor: '#222222' }),
        });
      };
      var C = function (e) {
        var t = e.post,
          n = Object(c.useState)(!1),
          r = Object(a.a)(n, 2),
          s = r[0],
          i = r[1];
        return Object(l.jsxs)('div', {
          className: 'card_body mb-3',
          children: [
            Object(l.jsxs)('div', {
              className: 'card_body-content mb-3',
              children: [
                Object(l.jsx)('span', {
                  children:
                    t.content.length < 60
                      ? t.content
                      : s
                      ? ''.concat(t.content, ' ')
                      : ''.concat(t.content.slice(0, 60), '...'),
                }),
                t.content.length > 60 &&
                  Object(l.jsx)('button', {
                    type: 'button',
                    onClick: function () {
                      return i(!0);
                    },
                    children: Object(l.jsx)('strong', {
                      className: 'readMore text-primary fw-500 hover-underline pointer',
                      children: s ? '' : 'Xem th\xeam',
                    }),
                  }),
              ],
            }),
            t.images.length > 0 && Object(l.jsx)(A, { images: t.images }),
          ],
        });
      };
      var P = function (e) {
          var t = e.isLike,
            n = e.handleLike,
            c = e.handleUnLike;
          return Object(l.jsx)(l.Fragment, {
            children: t
              ? Object(l.jsx)('button', {
                  type: 'button',
                  onClick: c,
                  children: Object(l.jsx)('i', { className: 'fas fa-heart text-danger me-2' }),
                })
              : Object(l.jsx)('button', {
                  type: 'button',
                  onClick: n,
                  children: Object(l.jsx)('i', { className: 'far fa-heart me-2' }),
                }),
          });
        },
        D = n(256),
        R = n(257);
      var I = function (e) {
          var t = e.url;
          return Object(l.jsx)('div', {
            className: 'p-2',
            children: Object(l.jsxs)(D.a, {
              url: t,
              children: [
                Object(l.jsx)(R.a, { round: !0, size: 24 }),
                Object(l.jsx)('span', { className: 'ms-2', children: 'Facebook' }),
              ],
            }),
          });
        },
        U = 'http://localhost:3000';
      var F = function (e) {
          var t = e.post,
            n = Object(c.useState)(!1),
            r = Object(a.a)(n, 2),
            s = r[0],
            u = r[1],
            d = Object(c.useState)(!1),
            j = Object(a.a)(d, 2),
            b = j[0],
            f = j[1],
            O = Object(c.useState)(!1),
            h = Object(a.a)(O, 2),
            x = h[0],
            v = h[1],
            y = Object(m.c)(function (e) {
              return e;
            }),
            N = y.auth,
            w = y.socket,
            _ = Object(m.b)(),
            k = Object(c.useState)(!1),
            E = Object(a.a)(k, 2),
            T = E[0],
            S = E[1],
            L = Object(c.useState)(!1),
            A = Object(a.a)(L, 2),
            C = A[0],
            D = A[1];
          Object(c.useEffect)(
            function () {
              t.likes.find(function (e) {
                return e._id === N.user._id;
              })
                ? u(!0)
                : u(!1);
            },
            [t.likes, N.user._id]
          );
          var R = (function () {
              var e = Object(o.a)(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!b) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          return f(!0), (e.next = 5), _(Object(g.f)({ auth: N, post: t, socket: w }));
                        case 5:
                          f(!1);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = Object(o.a)(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!b) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          return f(!0), (e.next = 5), _(Object(g.h)({ auth: N, post: t, socket: w }));
                        case 5:
                          f(!1);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(c.useEffect)(
            function () {
              N.user.saved.find(function (e) {
                return e === t._id;
              })
                ? S(!0)
                : S(!1);
            },
            [N.user.saved, t._id]
          );
          var G = (function () {
              var e = Object(o.a)(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!C) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          D(!0), _(Object(g.g)({ post: t, auth: N })), D(!1);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            M = (function () {
              var e = Object(o.a)(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!C) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          D(!0), _(Object(g.i)({ post: t, auth: N })), D(!1);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsx)('div', {
            className: 'card_footer',
            children: Object(l.jsxs)('div', {
              className:
                'card_icon_menu fs-20 align-items-center d-flex justify-content-between pb-3 border-bottom mb-3',
              children: [
                Object(l.jsxs)('div', {
                  className: 'd-flex align-items-center',
                  children: [
                    Object(l.jsxs)('div', {
                      className: 'd-flex align-items-center me-5 pointer',
                      children: [
                        Object(l.jsx)(P, { isLike: s, handleLike: R, handleUnLike: F }),
                        Object(l.jsx)('strong', { children: t.likes.length }),
                      ],
                    }),
                    Object(l.jsxs)(p.b, {
                      to: '/post/'.concat(t._id),
                      className: 'text-dark me-5 d-flex align-items-center pointer',
                      children: [
                        Object(l.jsx)('i', { className: 'far fa-comment-dots me-2' }),
                        Object(l.jsx)('strong', { className: 'text-dark', children: t.comments.length }),
                      ],
                    }),
                    Object(l.jsxs)('div', {
                      className: 'dropdown pointer',
                      children: [
                        Object(l.jsx)('button', {
                          type: 'button',
                          onClick: function () {
                            return v(!x);
                          },
                          'data-bs-toggle': 'dropdown',
                          id: 'dropdownMenuButton1',
                          children: Object(l.jsx)('i', { className: 'far fa-share-square' }),
                        }),
                        Object(l.jsx)('ul', {
                          className: 'dropdown-menu shadow rounded-10 border-0 px-2',
                          'aria-labelledby': 'dropdownMenuButton1',
                          children: Object(l.jsx)('li', {
                            className: 'rounded-3',
                            children: x && Object(l.jsx)(I, { url: ''.concat(U, '/post/').concat(t._id) }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                T
                  ? Object(l.jsx)('button', {
                      type: 'button',
                      onClick: M,
                      children: Object(l.jsx)('i', { className: 'fas fa-bookmark me-0 text-danger' }),
                    })
                  : Object(l.jsx)('button', {
                      type: 'button',
                      onClick: G,
                      children: Object(l.jsx)('i', { className: 'far fa-bookmark me-0' }),
                    }),
              ],
            }),
          });
        },
        G = n(16);
      var M = function (e) {
        var t = e.post,
          n = Object(m.c)(function (e) {
            return e;
          }),
          c = n.auth,
          a = n.socket,
          s = Object(m.b)(),
          i = Object(G.f)();
        return Object(l.jsxs)('div', {
          className: 'card_header d-flex mb-3',
          children: [
            Object(l.jsx)('div', {
              children: Object(l.jsx)('img', {
                src: t.user.avatar,
                className: 'rounded-circle circle img-cover',
                alt: 'avatar',
              }),
            }),
            Object(l.jsxs)('div', {
              className: 'd-flex align-items-center justify-content-between w-100 ps-2',
              children: [
                Object(l.jsxs)('div', {
                  className: 'card_name',
                  children: [
                    Object(l.jsx)('h6', {
                      className: 'm-0',
                      children: Object(l.jsx)(p.b, {
                        to: '/profile/'.concat(t.user._id),
                        className: 'text-dark',
                        children: t.user.fullname,
                      }),
                    }),
                    Object(l.jsx)(p.b, {
                      to: '/post/'.concat(t._id),
                      children: Object(l.jsx)('small', {
                        className: 'text-muted hover-underline',
                        children: b()(t.createdAt).fromNow(),
                      }),
                    }),
                  ],
                }),
                Object(l.jsxs)('div', {
                  className: 'nav-item dropdown',
                  children: [
                    Object(l.jsx)('div', {
                      className: 'pointer btn-edit rounded-circle circle-sm text-center',
                      style: { lineHeight: '27px' },
                      id: 'moreLink',
                      'data-bs-toggle': 'dropdown',
                      children: Object(l.jsx)('span', {
                        className: 'material-icons-outlined fs-6',
                        children: 'more_horiz',
                      }),
                    }),
                    Object(l.jsxs)('div', {
                      className: 'dropdown-menu shadow rounded-3 border-0 px-2',
                      'aria-labelledby': 'moreLink',
                      children: [
                        c.user._id === t.user._id &&
                          Object(l.jsxs)(l.Fragment, {
                            children: [
                              Object(l.jsxs)('button', {
                                type: 'button',
                                className: 'dropdown-item p-2 rounded-3 d-flex my-1 pointer',
                                onClick: function () {
                                  s({ type: x.c.STATUS, payload: Object(r.a)(Object(r.a)({}, t), {}, { onEdit: !0 }) });
                                },
                                children: [
                                  Object(l.jsx)('span', {
                                    className: 'material-icons-outlined me-2',
                                    children: 'create',
                                  }),
                                  Object(l.jsx)('span', {
                                    className: 'fw-500',
                                    children: 'Ch\u1ec9nh s\u1eeda b\xe0i vi\u1ebft',
                                  }),
                                ],
                              }),
                              Object(l.jsxs)('button', {
                                type: 'button',
                                className: 'dropdown-item p-2 rounded-3 d-flex my-1 pointer',
                                onClick: function () {
                                  return window.confirm('B\u1ea1n c\xf3 mu\u1ed1n xo\xe1?')
                                    ? (s(Object(g.c)({ post: t, auth: c, socket: a })), i.push('/'))
                                    : null;
                                },
                                children: [
                                  Object(l.jsx)('span', {
                                    className: 'material-icons-outlined me-2',
                                    children: 'delete_outline',
                                  }),
                                  Object(l.jsx)('span', { className: 'fw-500', children: 'Xo\xe1 b\xe0i vi\u1ebft' }),
                                ],
                              }),
                            ],
                          }),
                        Object(l.jsx)('hr', { className: 'dropdown-divider' }),
                        Object(l.jsxs)('button', {
                          type: 'button',
                          className: 'dropdown-item p-2 d-flex pointer',
                          onClick: function () {
                            navigator.clipboard.writeText(''.concat(U, '/post/').concat(t._id));
                          },
                          children: [
                            Object(l.jsx)('span', {
                              className: 'material-icons-outlined me-2 fs-5',
                              children: 'content_copy',
                            }),
                            Object(l.jsx)('span', { className: 'fw-500', children: 'Sao ch\xe9p li\xean k\u1ebft' }),
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
        var t = e.post;
        return Object(l.jsxs)('div', {
          className: 'border shadow-sm p-3 mb-5 rounded-10 bg-white',
          children: [
            Object(l.jsx)(M, { post: t }),
            Object(l.jsx)(C, { post: t }),
            Object(l.jsx)(F, { post: t }),
            Object(l.jsx)(S, { post: t }),
            Object(l.jsx)(_, { post: t }),
          ],
        });
      };
    },
    9: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return o;
      }),
        n.d(t, 'd', function () {
          return l;
        }),
        n.d(t, 'c', function () {
          return u;
        }),
        n.d(t, 'a', function () {
          return d;
        });
      var c = n(4),
        a = n.n(c),
        r = n(7),
        s = n(49),
        i = n.n(s),
        o = (function () {
          var e = Object(r.a)(
            a.a.mark(function e(t, n) {
              var c;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i.a.get('/api/'.concat(t), { headers: { Authorization: n } });
                    case 2:
                      return (c = e.sent), e.abrupt('return', c);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function () {
          var e = Object(r.a)(
            a.a.mark(function e(t, n, c) {
              var r;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i.a.post('/api/'.concat(t), n, { headers: { Authorization: c } });
                    case 2:
                      return (r = e.sent), e.abrupt('return', r);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, c) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = Object(r.a)(
            a.a.mark(function e(t, n, c) {
              var r;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i.a.patch('/api/'.concat(t), n, { headers: { Authorization: c } });
                    case 2:
                      return (r = e.sent), e.abrupt('return', r);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, c) {
            return e.apply(this, arguments);
          };
        })(),
        d = (function () {
          var e = Object(r.a)(
            a.a.mark(function e(t, n) {
              var c;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i.a.delete('/api/'.concat(t), { headers: { Authorization: n } });
                    case 2:
                      return (c = e.sent), e.abrupt('return', c);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
    },
  },
  [[254, 1, 2]],
]);
//# sourceMappingURL=main.1ae07f79.chunk.js.map
