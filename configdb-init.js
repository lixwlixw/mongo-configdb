{{ $s := service "mongo-configsvr" }}
config = {
    _id : "{{.ReplSetName}}",
     members : [
     {{range $c := $s.Containers }}{_id : {{$c.Seq}}, host: "{{$c.Domain}}:27019"},{{end}}
     ]
}

rs.initiate(config)

rs.status()
