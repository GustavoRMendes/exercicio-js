import { format, formatDistance, formatRelative, subDays } from 'date-fns'

console.log(format(new Date(), "'Today is a' eeee"))
//=> "Today is a Tuesday"

console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }))
//=> "3 days ago"

console.log(formatRelative(subDays(new Date(), 3), new Date()))
//=> "last Friday at 7:26 p.m."