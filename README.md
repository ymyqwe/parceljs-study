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
