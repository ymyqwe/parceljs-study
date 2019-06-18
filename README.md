# parcel-study

demos and studies about parcel.js

# nodejs single thread I/O

- <i>libuv</i> event-driven asynchronous I/O library

default 4 thread pools

## view threads on macOS

1. Terminal

```zsh
ps -a
ps -M -p <pid>
```

2. Activity Monitor

Initial thread 6

- UV_THREADPOOL_SIZE=X
  = OVERALL THREAD

event returned to main thread
I/O intensive rather than CPU intensive

child_process cluster to improve performance

### Comparison

| Project  | Parcel                    | Webpack |
| -------- | ------------------------- | ------- |
| prod     | 22.75s(with cache 0.975s) | 10.7s   |
| dev      | 19.42s(with cache 3.83s)  | 4.67s   |
| HMR      | 1.32s                     | 1.19s   |
| JS Size  | 1.1M                      | 837K    |
| CSS Size | 54K                       | 39K     |

### Parcel

#### Pros

- zero configuration
- html or js entry
- fast
- auto install packages
- built-in code splitting & HMR

#### Cons

- limited support configuration
- first built is slow

### Webpack

#### Pros

- flexible configuration
  — user defined project directories

#### Cons

- complicated configuration
- multicore, code-splitting, loaders need configuration
