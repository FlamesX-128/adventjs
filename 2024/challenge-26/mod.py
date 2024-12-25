def get_completed(time_worked, total_time):
    def parse_time(time):
        hh, mm, ss = map(int, time.split(':'))
        return hh * 3600 + mm * 60 + ss
    
    worked_seconds = parse_time(time_worked)
    total_seconds = parse_time(total_time)

    if total_seconds == 0:
        return '0%'
    
    percentage = round(worked_seconds / total_seconds * 100)
    
    return f"{percentage}%"
